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

        #! Cambiar a una consulta externa pasandole los datos como parámetros

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
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        #! Cambiar a una consulta externa pasandole los datos como parámetros

        connection = psycopg2.connect(**param)
        cur = connection.cursor()
        cur.execute("SELECT email, password FROM Usuario Where email = %s AND password = %s", (email, password))
        user = cur.fetchall()
        cur.close()
        connection.commit()
        connection.close()

        if user:
            return redirect('home')
        else:
            messages.info(request, 'Invalid Email or Password')
            return redirect('login_user')

    return render(request, "login.html")

def logout_user(request):

    return redirect('home')