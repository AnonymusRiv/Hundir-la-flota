import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function CustomFormsurName({ setsurName }) {
  const handleInputChange = (e) => setsurName(e.target.value);

  const isError = Input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input name="surname" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Ingresa el apellido de usuario.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Se requiere un apellido de usuario</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomFormsurName;
