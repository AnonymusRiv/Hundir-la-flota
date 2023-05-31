import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react'

function CustomFormName({ setName }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setName(e.target.value);

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input value={input} name="name" onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere un nombre de usuario</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomFormName;
