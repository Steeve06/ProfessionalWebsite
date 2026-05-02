from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project, Consultation
from .serializers import ProjectSerializer, ConsultationSerializer
from .utils.turnstile import verify_turnstile


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Provides 'list' and 'retrieve' actions for Projects.
    Read-only because projects are managed via the admin dashboard.
    """
    queryset         = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer


class ConsultationViewSet(viewsets.ModelViewSet):
    """
    Handles form submissions from both the Homepage contact form
    and the Schedule page booking form.
    """
    queryset         = Consultation.objects.all()
    serializer_class = ConsultationSerializer

    def create(self, request, *args, **kwargs):
        # 1. Verify Turnstile token before doing anything else
        token     = request.data.get('cf_turnstile_response', '')
        client_ip = (
            request.META.get('HTTP_X_FORWARDED_FOR', '').split(',')[0].strip()
            or request.META.get('REMOTE_ADDR')
        )

        if not verify_turnstile(token, remote_ip=client_ip):
            return Response(
                {'error': 'Human verification failed. Please try again.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # 2. Validate and save — DRF serializer handles field validation
        #    cf_turnstile_response is not a model field so it won't be passed
        #    to the serializer; we extract only what the model expects.
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(
                {'message': 'Consultation request received successfully.'},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)