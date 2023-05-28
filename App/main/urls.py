from django.contrib import admin
from django.urls import path
from .views import home, register, login_user, logout_user

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("logout_user/", logout_user, name='logout_user'),
]