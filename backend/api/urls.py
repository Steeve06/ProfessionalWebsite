from django.contrib.auth.models import User
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ConsultationViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'consultations', ConsultationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

try:
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@example.com', 'YourSecurePassword123')
        print("Superuser created successfully!")
except:
    pass