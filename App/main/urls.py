from django.contrib import admin
from django.urls import path
from .views import home, register, login_user, logout_user, error
from main import views

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("SignOut/", logout_user, name='logout_user'),
    path("http://localhost:8000/SignUp/", views.register, name = 'register'),
    path("Game/Help", views.home),
    path("Game/GameSelect", views.home),
    path("Game/GameSelect/Error", views.error),
    path("Game/Profile", views.home),
    path("Game/Support", views.home),
]