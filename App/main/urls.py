from django.contrib import admin
from django.urls import path
from .views import (home, register, login_user, logout_user, game, delete, showProfile, modifyProfile, stadistics, ShowStadistics,
                    profile, support, EasyGame, DificultGame, newGame, error)
from main import views

urlpatterns = [
    path("", home, name='home'),
    path("SignUp/", register, name='register'),
    path("SignIn/", login_user, name='login_user'),
    path("SignIn", login_user, name='login_user'),
    path("SignOut/", logout_user, name='logout_user'),
    path("Game/Help", views.help, name="help"),
    path("Game/GameSelect", game, name='game'),
    path("Game/Profile/", showProfile, name="showProfile"),
    path("Game/Support", support, name='supoort'),
    path("Game/Easy/EasyGame/", EasyGame, name="EasyGame"),
    path("Game/Difficult/DifficultGame", DificultGame, name="DificultGame"),
    path("Game/ShowStadistics/", ShowStadistics, name="ShowStadistics"),
    path("delete/", delete, name='delete'),
    path("ModifyUser/", modifyProfile, name='modifyProfile'),
    path("stadistics/", stadistics, name='stadistics'),
    path("newGame/", newGame, name='newGame'),
    path("Components/Error", error, name="error"),
]