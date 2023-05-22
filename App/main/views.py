from django.shortcuts import render, redirect
from django.contrib import messages
from .models import user
import psycopg2

param = {
    "host": "172.16.8.1",
    "port": "5432",
    "user": "postgres",
    "password": "postgres1234",
    "database": "postgres"
}

# Create your views here.
def home(request):
    return render(request, 'home.html')

def register(request):
    if request.method == 'POST':
        name = request.POST['name']
        surname = request.POST['surname']
        email = request.POST['email']
        password = request.POST['password']
        connection = psycopg2.connect(**param)
        cur = connection.cursor()
        cur.execute("INSERT INTO Usuario (email, name, surname, type, birthday, password) values (%s, %s, %s, %s, %s, %s)", (email, name, surname, "admin", "2002-08-15", password))
        cur.close()
        connection.commit()
        connection.close()
        print("success")
        return render(request, 'home.html')

    else:
        return render(request, "register.html")

def login_user(request):
    return render(request, "login.html")