import React, { useState } from 'react';
import ErrorMessageExample from './Components/Custom-form-user';
import PasswordInput from './Components/Custom-form-pass';
import CustomFormName from './Components/Custom-form-name';
import axios from 'axios'
import Cookies from 'js-cookie'

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const csrftoken = Cookies.get('csrftoken');
      const response = await axios.post('', { name, email, password }, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        // La solicitud se completó correctamente
        // Aquí puedes realizar alguna acción, como redirigir a otra página
        console.log('Registro exitoso');
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

