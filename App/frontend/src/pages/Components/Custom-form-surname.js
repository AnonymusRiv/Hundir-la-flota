import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react'

function CustomFormSurname({ setName }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setName(e.target.value);

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

export default CustomFormSurname;

