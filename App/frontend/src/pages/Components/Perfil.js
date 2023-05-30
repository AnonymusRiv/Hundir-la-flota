import React from 'react';

export const Datos = ({ name, surname, email }) => {
  return (
    <div>
      <h3 className="Auth-form-title">Datos</h3>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Apellido:</strong> {surname}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Datos;