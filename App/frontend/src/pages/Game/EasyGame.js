import React from "react";
import Tablero from "../Components/Tablero";
import Barcos from "../Components/Barcos";
export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;

const handlePositions = () => {

}

const tipo="easy"

function EasyGame() {
    return (
        <>
            <h1 className="games" align='center'>Modo Fácil 🌻</h1>
            <br></br>
            <h3 className='election'>
                En este modo de juego se mostrará un tablero de 10x10 en el que tendrás que adivinar la posición de los 6 barcos del oponente.
            </h3>
            <div className="tableros-container">
                <div>
                    <Barcos tipo={tipo}/>
                </div>
                <div className="tablero-container">
                    <Tablero filas={BOARD_ROWS} columnas={BOARD_COLUMNS} />
                </div>
                <div className="tablero-container">
                    <Tablero filas={BOARD_ROWS} columnas={BOARD_COLUMNS} />
                </div>
            </div>
            <div align='center'>
                <button className='start' onClick={handlePositions}>Comenzar Partida</button>
            </div>
        </>
    );
}  

export default EasyGame;