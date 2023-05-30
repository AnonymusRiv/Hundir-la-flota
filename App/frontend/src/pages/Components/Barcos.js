import React from 'react';
import '../../css/barcos.css';


const Barcos = () => {
    // Datos de ejemplo de los barcos
    const barcos = [
        { id: 1, fila: 2, columna: 3, direccion: 'horizontal', longitud: 3 },
        { id: 2, fila: 5, columna: 7, direccion: 'horizontal', longitud: 4 },
        { id: 3, fila: 8, columna: 1, direccion: 'horizontal', longitud: 5 },
        { id: 4, fila: 1, columna: 5, direccion: 'horizontal', longitud: 2 },
      // Agrega más barcos si es necesario
    ];
  
    return (
      <div className="barcos-container">
        <div className="barcos">
          {barcos.map((barco) => (
            <div
              key={barco.id}
              className={`barco ${barco.direccion}`}
              style={{
                height: `${barco.longitud * 40}px`,
              }}
            >
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Barcos;