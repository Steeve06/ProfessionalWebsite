from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    tag = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/') 
    tech_tags = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Consultation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=200, blank=True, null=True) # Ensure this exists
    date = models.DateField(blank=True, null=True) # Allow null since Home Form doesn't have it
    time = models.TimeField(blank=True, null=True) # Allow null
    message = models.TextField()
    status = models.CharField(max_length=20, default="Pending")

    def __str__(self):
        return f"{self.name} - {self.date}"