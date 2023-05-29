import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

function CustomFormName({ setName }) {
  const handleInputChange = (e) => setName(e.target.value);

  const isError = Input === '';

  return (
    <FormControl isInvalid={isError}>
      <Input name="name" onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Ingresa el nombre de usuario.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Se requiere un nombre de usuario</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default CustomFormName;
