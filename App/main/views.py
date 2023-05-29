from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib import messages
from .models import *
from .querys import *
import json


# Create your views here.
def home(request):
    return render(request, "index.html")

def register(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        name = body.get('name')
        password = body.get('password')
    
        registerFunction(name, email, password)

        return render(request, "index.html")

    else:
        return render(request, "index.html")

def login_user(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        password = body.get('password')

        user = loginFunction(email, password)
        
        if user:
             #game() # Redirecciona a la URL Game/SelectGame
            return redirect("../Game/GameSelect")
        else:
            messages.info(request, 'Invalid Email or Password')
            return render(request, "index.html")
        
    return render(request, "index.html")

def logout_user(request):
    return redirect('index.html')

def game():
    return redirect('Game/GameSelect')