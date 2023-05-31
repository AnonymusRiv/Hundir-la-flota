import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';

export default function ErrorMessageExample({ setEmail }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setEmail(e.target.value);
  };

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input name="email" type="email" value={input} onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere un correo electrónico</FormErrorMessage>
      )}
    </FormControl>
  );
}