import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from 'react'
import { Input } from '@chakra-ui/react'

export default function ErrorMessageExample() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? null : (
          <FormErrorMessage>Se requiere email</FormErrorMessage>
        )}
      </FormControl>
    )
  }