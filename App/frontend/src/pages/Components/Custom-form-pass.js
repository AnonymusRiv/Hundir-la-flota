import { FormControl, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export default function PasswordInput({ setPassword }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setPassword(e.target.value);
  };

  const validatePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(input);
  };

  const isError = input === '' || !validatePassword();

  return (
    <FormControl isInvalid={isError}>
      <Input name="password" type="password" value={input} onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere una contraseña</FormErrorMessage>
      )}
      {!isError ? (
        <FormHelperText>La contraseña debe de contener  al menos 8 caracteres, una máyuscula, una minúscula, un dígito y un carácter especial.</FormHelperText>
      ) : null}
    </FormControl>
  );
}
