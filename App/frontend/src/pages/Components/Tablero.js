import React from 'react';
import Celda from './Celda';
import '../../css/tablero.css';

const Tablero = ({ filas, columnas }) => {
  // Generar celdas del tablero
  const celdas = [];
  const numeroCeldas = filas * columnas;
  for (let i = 0; i < numeroCeldas; i++) {
    celdas.push(<Celda key={i} />);
  }

  return (
    <div className="tablero" style={{ gridTemplateColumns: `repeat(${columnas}, 1fr)`, gridTemplateRows: `repeat(${filas}, 1fr)` }}>
      {celdas}
    </div>
  );
};

export default Tablero;
