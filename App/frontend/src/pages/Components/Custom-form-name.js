import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react'

function CustomFormName({ setName }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setName(e.target.value);
  };

  const validateName = () => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(input);
  };

  const isError = input === '' || !validateName();

  return (
    <FormControl isInvalid={isError}>
      <Input value={input} name="name" onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere un nombre de usuario</FormErrorMessage>
      )}
      {!isError ? (
        <FormHelperText>El nombre no debe contener números ni caracteres especiales.</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default CustomFormName;
