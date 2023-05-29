from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
from .querys import *

# Create your views here.
def home(request):
    return render(request, "index.html")

def register_user(request):
    if request.method == 'POST':
        name1 = request.POST.get['name']
        #surname = request.POST['surname']
        email = request.POST.get['email']
        password = request.get['password']

        registerFunction(name1, email, password)

        return render(request, 'index.html')

    else:
        return render(request, "index.html")

def login_user(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        user = loginFunction(email, password)
        if user:
            return redirect('index.html')
        else:
            messages.info(request, 'Invalid Email or Password')
            return redirect('index.html')

    return render(request, "index.html")

def logout_user(request):

    return redirect('index.html')