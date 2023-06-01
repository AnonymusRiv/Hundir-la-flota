import { FormControl, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { useState } from 'react'

function CustomFormsurName({ setsurName }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
    setsurName(e.target.value);
  };

  const validateSurname = () => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(input);
  };

  const isError = input === '' || !validateSurname();

  return (
    <FormControl isInvalid={isError}>
      <Input value={input} name="surname" onChange={handleInputChange} />
      {!isError ? null : (
        <FormErrorMessage>Se requiere un apellido de usuario</FormErrorMessage>
      )}
      {!isError ? (
        <FormHelperText>El nombre no debe contener números ni caracteres especiales.</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default CustomFormsurName;

