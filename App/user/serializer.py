from rest_framework import serializers
from .models import user

class Userserializer(serializers.ModelSerializer):

    class Meta:
        model = user
        fields = ('id', 'name', 'surname', 'email', 'description')