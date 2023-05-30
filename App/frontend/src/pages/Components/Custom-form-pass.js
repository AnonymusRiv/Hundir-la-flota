import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'

export default function PasswordInput() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <Input type='password' value={input} onChange={handleInputChange} />
        {!isError ? null : (
          <FormErrorMessage>Se requiere contraseña</FormErrorMessage>
        )}
      </FormControl>
    )
  }