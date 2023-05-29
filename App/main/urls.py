from django.contrib import admin
from django.urls import path
from .views import home, register_user, login_user, logout_user
from main import views

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register_user, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("logout_user/", logout_user, name='logout_user'),
    path("SignUp", views.register_user),
]