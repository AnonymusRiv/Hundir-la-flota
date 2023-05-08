from rest_framework import serializers
from .models import Customer

class Userserializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('pk', 'name', 'surname', 'email', 'description')