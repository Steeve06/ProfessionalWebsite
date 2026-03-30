from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ConsultationViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'consultations', ConsultationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]