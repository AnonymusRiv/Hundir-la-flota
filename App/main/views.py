from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib import messages
from .models import *
from .querys import *
import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout




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
    
        user = User.objects.create_user(email=email, password=password, username=email)
        
        # Crear un objeto UserProfile relacionado
        #profile = UserProfile(user=user, username=email)
        #profile.save()

        if registerFunction(name, email, password) :
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
        print(user)
        if user is not None:
            print(user)
            # Iniciar sesión del usuario
            login(request, user)
            return JsonResponse({"valido": True})
        else:
            print("ERROR")
            return JsonResponse({"falso": False})
        
    return render(request, "index.html")

def logout_user(request):
    logout(request)
    return redirect('index.html')

def game(request):
    return render(request, 'index.html')

def error(request):
    return render(request, "index.html")
