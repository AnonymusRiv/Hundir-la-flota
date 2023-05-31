import React from 'react';
import './WelcomeScreen.css';
import { NavLink } from 'react-router-dom';

function InfoGame () {
  return (
    <>
    <h2 className="tip-box-title">⚓ Reglas ⚓</h2>
      <p className="player-tip">
        Bienvenido al clásico juego Hundir la Flota. Deberás posicionar tus barcos 
        en unas coordenadas secretas que deberá adivinar tu oponente. El primero
        en hundir los barcos del contrincante, será el ganador.
      </p>
      <p className="player-tip">
        Cada día habrá un mapa de diferentes dimensiones (10x10 y 15x15) dependiendo de la dificultad.
        La forma de saber si una solución es mejor que otra, será por el número de clicks que se hagan en el mapa
        para lograr la victoria.
      </p>
    </>
  );
}

function WelcomeScreen() {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <header>
      <h1>🚢 Hundir la Flota 🚢</h1>
      <p className="subtitle">El clásico juego de estrategia</p>
    </header>
    <main>
      <InfoGame />
      <div className= "margen">
        <NavLink to= "/SignUp/"> <button className="User">Regístrate</button> </NavLink>
        <NavLink to= "/SignIn/"> <button className="User">Inicia Sesión</button> </NavLink>
      </div>
        <NavLink to= "/Game/GameSelect"> <button className="Jugar">Jugar</button> </NavLink>
    </main>
    <footer>
      Autores: Grupo 4
      <p>Enlace al repositorio: <a href="https://github.com/AnonymusRiv/Hundir-la-flota">Hundir la Flota</a>{' '}</p> 
    </footer>
    </>
  );
}

export default WelcomeScreen;