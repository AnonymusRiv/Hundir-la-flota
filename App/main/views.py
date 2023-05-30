from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib import messages
from .models import *
from .querys import *
import json
from django.http import JsonResponse




# Create your views here.
def home(request):
    return render(request, "index.html")

def register(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        name = body.get('name')
        password = body.get('password')
    
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

        if user is not None:
            loginFunction(email, password)

            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
        
    return render(request, "index.html")

def logout_user(request):
    return redirect('index.html')

def game(request):
    return render(request, 'index.html')

def error(request):
    return render(request, "index.html")
