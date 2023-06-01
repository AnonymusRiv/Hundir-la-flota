from django.db import models
from django.contrib.auth.models import User


#class user(models.Model):
#    name = models.CharField("name", max_length=255)
#    surname = models.CharField("surname", max_length=255)
#    email = models.EmailField()
#    description = models.TextField(blank=True, null=True)
#    birthday = models.DateField()
#    createdAt = models.DateTimeField("Created at", auto_now_add=True)
#
#    def __str__(self):
#        return self.name

class Estadistics(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="")
    numberClickSucces = models.IntegerField(default=0)
    numberClickTotal = models.IntegerField(default=0)
    numberWins = models.IntegerField(default=0)
    numberDefeats = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.id}"