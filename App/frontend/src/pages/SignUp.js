import React, { useState } from 'react';
import ErrorMessageExample from './Components/Custom-form-user';
import PasswordInput from './Components/Custom-form-pass';
import CustomFormName from './Components/Custom-form-name';

export const SignUp = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registro de Usuario</h3>
          <div className="Auth-form-input">
            <label>Nombre</label>
            <br />
            <CustomFormName />
          </div>
          <br />
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
              Regístrate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

