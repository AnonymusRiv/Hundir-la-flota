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
#
class Game(models.Model) :
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    numberClickSucces = models.IntegerField()
    numberClickTotal = models.IntegerField()
    numberWins = models.IntegerField()

    def __str__(self):
        return f"{self.id}, {self.user}, {self.numberClickSucces}, {self.numberClickTotal}, {self.numberWins}"

class Estadistics(models.Model):
    id = models.AutoField(primary_key=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.id}, {self.game}"
