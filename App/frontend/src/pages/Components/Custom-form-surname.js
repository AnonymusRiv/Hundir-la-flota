import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react'

function CustomFormsurName({ setsurName }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
    setsurName(e.target.value);
  };

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input value={input} name="surname" onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere un apellido de usuario</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomFormsurName;

