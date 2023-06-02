from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib import messages
from .models import *
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
        Estadistics.objects.create(user=user)

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

def modifyProfile(request):
    if request.method == 'POST':
        user = request.user
        body = json.loads(request.body)
        email = body.get('email')
        name = body.get('name')
        surname = body.get('surname')
        if user.is_authenticated:
            user.email = email
            user.first_name = name
            user.last_name = surname
            user.username = email
            user.save()
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    return render(request, "index.html")

def delete(request):
    if request.method == 'POST':
        user = request.user
        if user.is_authenticated:
            estadistics = Estadistics.objects.get(user=user)
            estadistics.delete()
            user.delete()
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    return render(request, "index.html")

def stadistics(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        winner = body.get('winner')
        numberOfHits = body.get('numberOfHits')
        numberOfSuccessfulHits = body.get('numberOfSuccessfulHits')
        user = request.user
        aux = Estadistics.objects.get(user = user)
        if winner == "player":
            wins = aux.numberWins + 1
            ClickSucces = aux.numberClickSucces + numberOfSuccessfulHits
            ClickTotal = aux.numberClickTotal + numberOfHits
            aux.numberWins = wins
            aux.numberClickSucces = ClickSucces
            aux.numberClickTotal = ClickTotal
            aux.save()
        else:
            defeats = aux.numberDefeats + 1
            ClickSucces = aux.numberClickSucces + numberOfSuccessfulHits
            ClickTotal = aux.numberClickTotal + numberOfHits
            aux.numberDefeats = defeats
            aux.numberClickSucces = ClickSucces
            aux.numberClickTotal = ClickTotal
            aux.save()
        return JsonResponse({"valido": True})
    else:
        return render(request, "index.html")

def ShowStadistics(request):
    if request.method == 'POST':
        user = request.user
        aux = Estadistics.objects.get(user = user)
        estadistics_data = {
            'winner' : aux.numberWins,
            'numberOfHits' : aux.numberClickTotal,
            'numberOfSuccessfulHits' : aux.numberClickSucces,
            'defeats' : aux.numberDefeats,
        }
        return JsonResponse(estadistics_data)
    return render(request, "index.html")

def profile(request):
    return render(request, "index.html")

def support(request):
    return render(request, "index.html")

def EasyGame(request):
    if request.method == 'POST':
        # Autenticar al usuario
        if request.user.is_authenticated:
            return JsonResponse({"valido": True})
        else:
            return JsonResponse({"falso": False})
    return render(request, "index.html")

def DificultGame(request):
    return render(request, "index.html")

def help(request):
    return render(request, "index.html")

def newGame(request):
    return render(request, "index.html")

def error(request):
    return render(request, "index.html")