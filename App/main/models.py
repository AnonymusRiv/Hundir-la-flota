from django.db import models

# Create your models here.
class user(models.Model):
    name = models.CharField("name", max_length=255)
    surname = models.CharField("surname", max_length=255)
    email = models.EmailField()
    description = models.TextField(blank=True, null=True)
    birthday = models.DateField()
    createdAt = models.DateTimeField("Created at", auto_now_add=True)

    def __str__(self):
        return self.name

class estadistics(models.Model):
    id = models.IntegerField()
    game_id = models.IntegerField()

class table(models.Model):
    id = models.IntegerField()
    user_id = models.EmailField()
    numberClicksSucces = models.IntegerField()
    numberClicksTotal = models.IntegerField()
    win = models.BooleanField()