import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'

function CustomFormName() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <Input value={input} onChange={handleInputChange} />
        {!isError ? null : (
          <FormErrorMessage>Se requiere de un nombre de usuario</FormErrorMessage>
        )}
      </FormControl>
    )
}

export default CustomFormName;