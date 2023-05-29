from django.contrib import admin
from django.urls import path
from .views import home, register, login_user, logout_user
from main import views

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("logout_user/", logout_user, name='logout_user'),
    path("http://localhost:8000/SignUp/", views.register, name = 'register'),
    path("http://localhost:8000/SignIn/", views.login_user, name = 'login_user'),
    path("Game/Help", views.home),
    path("Game/GameSelect", views.home),

]