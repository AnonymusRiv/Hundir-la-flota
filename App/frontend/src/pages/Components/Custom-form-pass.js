import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export default function PasswordInput({ setPassword }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setPassword(e.target.value);
  };

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input name="password" type="password" value={input} onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere una contraseña</FormErrorMessage>
      )}
    </FormControl>
  );
}
