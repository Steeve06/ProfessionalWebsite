from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Project, Consultation
from .serializers import ProjectSerializer, ConsultationSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Provides 'list' and 'retrieve' actions for Projects.
    We use ReadOnly because usually only Admins add projects via the Dashboard.
    """
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class ConsultationViewSet(viewsets.ModelViewSet):
    """
    Handles the 'Schedule Call' form submissions.
    """
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer

    def create(self, request, *args, **kwargs):
        # This logic runs when React sends the 'Schedule Call' form
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            # Engineer's Note: This is where you'd trigger a 
            # notification email to yourself or the client.
            return Response(
                {"message": "Consultation scheduled successfully!"}, 
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)