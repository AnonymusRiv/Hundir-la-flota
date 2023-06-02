import { FormControl, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
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
    <FormControl isInvalid={isError} >
      <Input name="email" type="email" value={input} onChange={handleInputChange}/>
      {!isError ? <FormHelperText> El formato debe ser usuario@correo.es</FormHelperText> : (
        <FormErrorMessage>Se requiere un correo electrónico</FormErrorMessage>
      )}
    </FormControl>
  );
}