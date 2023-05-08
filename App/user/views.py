from django.shortcuts import render
from rest_framework import viewsets
from .serializer import Userserializer
from .models import user

# Create your views here.
class userview(viewsets.ModelViewSet):
    serializer_class = Userserializer
    queryset = user.objects.all()