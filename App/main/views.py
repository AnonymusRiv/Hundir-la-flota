from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
#def home(request):
#    return render(request, '')

def register(request):
    if request.method == 'POST':
        name = request.POST['name']
        surname = request.POST['surname']
        email = request.POST['email']
        password = request.POST['password']
        if User.objects.filter(email=email).exists():
            messages.info(request, 'Email is already exist ')
            return redirect(register)
        else:
            user = User.objects.create_user(name=name, surname=surname, email=email)
            user.set_password(password)
            user.save()
            print("success")

    else:
        return render(request, "register.html")

def login_user(request):