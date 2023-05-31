import React from 'react';
import '../../css/barcos.css';

//Función que cuando se haga click en el botón izquierdo del ratón, se cambia la dirección del barco
const handleClick = (event) => {
    if (event.button === 0) {
      
    }
};

const Barcos = (tipo) => {
    let barcos1 = [];
    let barcos2 = [];
    //Dependiendo del tipo de juego se muestran los barcos
    if(tipo.tipo==="easy"){
      // Datos de ejemplo de los barcos
      barcos1 = [
        { id: 1, fila: 1, columna: 1, direccion: 'vertical', longitud: 4 },
        { id: 2, fila: 2, columna: 1, direccion: 'vertical', longitud: 3 },
        { id: 3, fila: 3, columna: 1, direccion: 'vertical', longitud: 3 },
      ];
      barcos2 = [
        { id: 4, fila: 4, columna: 2, direccion: 'vertical', longitud: 2 },
        { id: 5, fila: 5, columna: 2, direccion: 'vertical', longitud: 2 },
        { id: 6, fila: 6, columna: 2, direccion: 'vertical', longitud: 1 },
      ];};
    if(tipo.tipo==="difficult"){
      // Datos de ejemplo de los barcos
      barcos1 = [
        { id: 1, fila: 2, columna: 3, direccion: 'vertical', longitud: 3 },
        { id: 2, fila: 5, columna: 7, direccion: 'vertical', longitud: 2 },
        { id: 3, fila: 8, columna: 1, direccion: 'vertical', longitud: 2 },
        { id: 4, fila: 1, columna: 5, direccion: 'vertical', longitud: 1 },
        { id: 5, fila: 4, columna: 9, direccion: 'vertical', longitud: 1 },
        { id: 6, fila: 6, columna: 3, direccion: 'vertical', longitud: 1 },
    ];};

    return (
      <div className="barcos-container">
        <div className="barcos">
          {barcos1.map((barco) => (
            <div
              key={barco.id}
              onClick={handleClick}
              className={`barco ${barco.direccion}`}
              style={{
                height: `${barco.longitud * 50}px`,
              }}
            >
            </div>
          ))}
        </div>
        <div className="barcos">
          {barcos2.map((barco) => (
            <div
              key={barco.id}
              onClick={handleClick}
              className={`barco ${barco.direccion}`}
              style={{
                height: `${barco.longitud * 50}px`,
              }}
            >
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Barcos;