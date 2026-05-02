from rest_framework import serializers
from .models import Project, Consultation


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Project
        fields = '__all__'


class ConsultationSerializer(serializers.ModelSerializer):
    # Turnstile token is verified in the view and must not reach the model.
    # write_only=True + required=False means DRF accepts it in input but
    # never tries to save it or include it in responses.
    cf_turnstile_response = serializers.CharField(
        write_only=True,
        required=False,
        allow_blank=True
    )

    class Meta:
        model  = Consultation
        fields = [
            'id',
            'name',
            'email',
            'company',
            'date',
            'time',
            'message',
            'status',
            'cf_turnstile_response',  # accepted in input, never written to DB
        ]
        read_only_fields = ['id', 'status']

    def create(self, validated_data):
        # Strip the token before the model layer ever sees it
        validated_data.pop('cf_turnstile_response', None)
        return super().create(validated_data)