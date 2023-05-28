import React, { useState } from 'react';
import ErrorMessageExample from './Components/Custom-form-user';
import PasswordInput from './Components/Custom-form-pass';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesión</h3>
          <div className="Auth-form-input">
            <label>Email</label>
            <br />
            <ErrorMessageExample />
          </div>
          <br />  
          <div className="Auth-form-input">
            <label>Contraseña</label>
            <br />  
            <PasswordInput />
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