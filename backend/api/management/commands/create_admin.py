# yourapp/management/commands/create_admin.py
import os
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Creates a superuser from environment variables if one does not exist'

    def handle(self, *args, **options):
        username = os.environ.get('DJANGO_ADMIN_USER',  'admin')
        email    = os.environ.get('DJANGO_ADMIN_EMAIL', '')
        password = os.environ.get('DJANGO_ADMIN_PASS')

        if not password:
            self.stdout.write(self.style.ERROR(
                'DJANGO_ADMIN_PASS environment variable is not set. Aborting.'
            ))
            return

        if User.objects.filter(username=username).exists():
            # Reset the password on the existing account instead
            user = User.objects.get(username=username)
            user.set_password(password)
            user.save()
            self.stdout.write(self.style.SUCCESS(
                f'Password updated for existing user "{username}".'
            ))
        else:
            User.objects.create_superuser(username, email, password)
            self.stdout.write(self.style.SUCCESS(
                f'Superuser "{username}" created successfully.'
            ))