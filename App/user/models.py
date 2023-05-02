from django.db import models

# Create your models here.
class user(models.Model):
    name = models.CharField("name", max_length=255)
    surname = models.CharField("surname", max_length=255)
    email = models.EmailField()
    description = models.TextField(blank=True, null=True)
    createdAt = models.DateTimeField("Created at", auto_now_add=True)

    def __str__(self):
        return self.name