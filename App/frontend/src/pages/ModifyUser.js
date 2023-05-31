import React, { useState } from 'react';
import ErrorMessageExample from './Components/Custom-form-user';
import CustomFormName from './Components/Custom-form-name';
import CustomFormsurName from './Components/Custom-form-surname';

export const ModifyUser = () => {
    const [name, setName] = useState('');
    const [surname, setsurName] = useState('');
    const [email, setEmail] = useState('');

    const handleData = async (event) => {
        event.preventDefault();
        try {
        
        const response = await fetch('/ModifyUser/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname, email}),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.valido) {
                console.log("Usuario modificado");
                window.location.href = '/Game/Profile';
            } else {
                console.log("Error al modificar el usuario");}
            }
        
        } catch (error) {
            console.log('Error de red', error);
        }
    };

    return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleData}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Modificar Información</h3>
          <div className="Auth-form-input">
            <label>Nombre</label>
            <br />
            <CustomFormName setName={setName} />
          </div>
          <br />
          <div className="Auth-form-input">
            <label>Apellido</label>
            <br />
            <CustomFormsurName setsurName={setsurName} />
          </div>
          <br />
          <div className="Auth-form-input">
            <label>Email</label>
            <br />
            <ErrorMessageExample setEmail={setEmail} />
          </div>
          <br />
          <div>
            <button type="submit" className="sign">
              Modificar datos
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifyUser;