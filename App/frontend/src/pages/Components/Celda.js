import React, { useState } from 'react';

const Celda = () => {
  const [estado, setEstado] = useState('vacio');

  const handleClick = () => {
    // Cambiar el estado de la celda al siguiente estado
    switch (estado) {
      case 'vacio':
        setEstado('conBarco');
        break;
      case 'conBarco':
        setEstado('agua');
        break;
      case 'agua':
        setEstado('tocado');
        break;
      case 'tocado':
        setEstado('hundido');
        break;
      case 'hundido':
        setEstado('vacio');
        break;
      default:
        setEstado('vacio');
    }
  };

  // Asignar una clase CSS al botón según el estado actual
  const obtenerClaseCSS = () => {
    switch (estado) {
      case 'vacio':
        return 'celda-vacia';
      case 'conBarco':
        return 'celda-con-barco';
      case 'agua':
        return 'celda-agua';
      case 'tocado':
        return 'celda-tocado';
      case 'hundido':
        return 'celda-hundido';
      default:
        return 'celda-vacia';
    }
  };

  return (
    <button className={`celda ${obtenerClaseCSS()}`} onClick={handleClick}></button>
  );
};

export default Celda;
