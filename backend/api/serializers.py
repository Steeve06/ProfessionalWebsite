from rest_framework import serializers
from .models import Project, Consultation

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Project
        fields = '__all__'

class ConsultationSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Consultation
        fields = '__all__'