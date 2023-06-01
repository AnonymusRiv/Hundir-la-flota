import React, { useState } from 'react';

const Error = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const isUserValid = checkUserCredentials(email, password);

    if (isUserValid) {
      console.log('Inicio de sesión exitoso');
      setErrorMessage('');
    } else {
      // Usuario no válido, mostrar mensaje de error
      setErrorMessage('El email o la contraseña son incorrectos');
    }
  };

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <div>
        <label htmlFor="email">Nombre de usuario:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Iniciar sesión</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Error;
