import React from 'react';
import { NavLink } from 'react-router-dom';

import { PlayerFleet } from '../PlayerFleet';
import { PlayerBoard } from './DifficultPlayerBoard';
import { ComputerBoard } from './DifficultComputerBoard';
import { DifficultPlayerTips } from './DifficultPlayerTips';

export const DifficultGameView = ({
  availableShips,
  selectShip,
  currentlyPlacing,
  setCurrentlyPlacing,
  rotateShip,
  placeShip,
  placedShips,
  startTurn,
  computerShips,
  gameState,
  changeTurn,
  hitComputer,
  hitsByPlayer,
  setHitsByPlayer,
  hitsByComputer,
  handleComputerTurn,
  checkIfGameOver,
  winner,
  startAgain,
  setComputerShips,
}) => {
  return (
    <>
    <h1 className="games" align='center'>Modo Difícil 💀</h1>
    <br></br>
    <h3 className='election'>
        En este modo de juego se mostrará un tablero de 15x15 en el que tendrás que adivinar la posición de los 6 barcos del oponente (ahora de menor tamaño).
    </h3>
    <section id="game-screen">
      {gameState !== 'placement' ? (
        <DifficultPlayerTips
          gameState={gameState}
          hitsbyPlayer={hitsByPlayer}
          hitsByComputer={hitsByComputer}
          winner={winner}
          startAgain={startAgain}
        />
      ) : (
        <PlayerFleet
          availableShips={availableShips}
          selectShip={selectShip}
          currentlyPlacing={currentlyPlacing}
          startTurn={startTurn}
          startAgain={startAgain}
        />
      )}

      <PlayerBoard
        currentlyPlacing={currentlyPlacing}
        setCurrentlyPlacing={setCurrentlyPlacing}
        rotateShip={rotateShip}
        placeShip={placeShip}
        placedShips={placedShips}
        hitsByComputer={hitsByComputer}
      />
      <ComputerBoard
        computerShips={computerShips}
        changeTurn={changeTurn}
        gameState={gameState}
        hitComputer={hitComputer}
        hitsByPlayer={hitsByPlayer}
        setHitsByPlayer={setHitsByPlayer}
        handleComputerTurn={handleComputerTurn}
        checkIfGameOver={checkIfGameOver}
        setComputerShips={setComputerShips}
      />
    </section>
    <div align='center'>
      <NavLink to="/Game/GameSelect"><button className='inicio'>Volver al inicio</button></NavLink>
    </div>
    </>
  );
};

export default DifficultGameView;
