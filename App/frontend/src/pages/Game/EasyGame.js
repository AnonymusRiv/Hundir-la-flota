import React, {useState} from "react";
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

// Returns an empty board
export const generateEmptyLayout = () => {
    return new Array(BOARD_ROWS * BOARD_COLUMNS).fill(SQUARE_STATE.empty);
};

function EasyGame() {
    return (
        <>
            <h1 align='center'>EasyGame</h1>
            <div className="board"></div>
        </>
    );
}  

export default EasyGame;