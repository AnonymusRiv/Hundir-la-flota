from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib import messages
from .models import *
from .querys import *
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout, get_user_model


# Create your views here.
def home(request):
    return render(request, "index.html")


def register(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        name = body.get('name')
        password = body.get('password')
        surname = body.get('surname')

        user = User.objects.create_user(email=email, password=password, username=email, first_name=name, last_name=surname)

        if user is not None :
            login(request, user)
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    else:
        return render(request, "index.html")

def login_user(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        password = body.get('password')

        # Autenticar al usuario
        user = authenticate(request, username=email, password=password)
        if user is not None:
            # Iniciar sesión del usuario
            login(request, user)
            return JsonResponse({"valido": True})
        else:
            print("ERROR")
            return JsonResponse({"falso": False})

    return render(request, "index.html")

def logout_user(request):
    if request.method == 'POST':
        # Autenticar al usuario
        if logout(request):
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})

    return render(request, "index.html")

def game(request):
    if request.method == 'POST':
        # Autenticar al usuario
        if request.user.is_authenticated:
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})

    return render(request, "index.html")


def error(request):
    return render(request, "index.html")

def showProfile(request):
    if request.method == 'POST':
        user = request.user
        profile_data = {
            'email' : user.email,
            'name' : user.first_name,
            'surname' : user.last_name,
        }
        return JsonResponse(profile_data)
    return render(request, "index.html")

def modify(request):
    if request.method == 'POST':
        User = get_user_model()
        user = request.user
        if user.is_authenticated:
            new_data = request.POST.get('new_data')
            user.data_field = new_data
            user.save()
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    return render(request, "index.html")

def delete(request):
    if request.method == 'POST':
        User = get_user_model()
        user = request.user
        if user.is_authenticated:
            user.delete()
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    return render(request, "index.html")