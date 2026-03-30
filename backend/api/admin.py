# backend/api/admin.py
from django.contrib import admin
from .models import Project, Consultation

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'tag', 'created_at') # Columns to show in the list
    search_fields = ('title', 'tag')             # Add a search bar

@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'date', 'time', 'status')
    list_filter = ('status', 'date')             # Add filters on the right side