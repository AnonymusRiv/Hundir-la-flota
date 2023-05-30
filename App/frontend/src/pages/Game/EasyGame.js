import React, {useState} from "react";
import Tablero from "../Components/Tablero";
import Barcos from "../Components/Barcos";
export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;
export const BOARD = BOARD_COLUMNS * BOARD_ROWS;

export const SQUARE_STATE = {
    empty: 'empty',
    ship: 'ship',
    hit: 'hit',
    miss: 'miss',
    ship_sunk: 'ship-sunk',
    forbidden: 'forbidden',
    awaiting: 'awaiting',
};

function EasyGame() {
    return (
        <>
            <h1 align='center'>EasyGame</h1>
            <div className="tableros-container">
                <div>
                    <Barcos />
                </div>
                <div className="tablero-container">
                    <Tablero filas={BOARD_ROWS} columnas={BOARD_COLUMNS} />
                </div>
                <div className="tablero-container">
                    <Tablero filas={BOARD_ROWS} columnas={BOARD_COLUMNS} />
                </div>
            </div>
        </>
    );
}  

export default EasyGame;