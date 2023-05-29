import React, { useState } from 'react';
import ErrorMessageExample from './Components/Custom-form-user';
import PasswordInput from './Components/Custom-form-pass';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/SignIn/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // La solicitud se completó correctamente
        // Aquí puedes realizar alguna acción, como redirigir a otra página
        window.location.href = '/Game/GameSelect';
  
      } else {
        // La solicitud falló
        // Aquí puedes manejar el error de alguna manera
        console.log('Error al registrar');
      }

    } catch (error) {
      // Hubo un error de red u otro error relacionado con la solicitud
      console.log('Error de red', error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesión</h3>
          <div className="Auth-form-input">
            <label>Email</label>
            <br />
            <ErrorMessageExample setEmail={setEmail}/>
          </div>
          <br />  
          <div className="Auth-form-input">
            <label>Contraseña</label>
            <br />  
            <PasswordInput setPassword={setPassword}/>
          </div>
          <div>
            <button type="submit" className="sign">
              Inicie sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;