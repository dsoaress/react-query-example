import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputElementProps,
  InputGroup,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { forwardRef } from 'react'

type InputProps = {
  label: string
  name: string
  inputElement?: InputElementProps
  required?: boolean
} & ChakraInputProps

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, inputElement, ...props }, ref) => {
    return (
      <FormControl id={name}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          {inputElement}
          <ChakraInput name={name} ref={ref} {...props} />
        </InputGroup>
      </FormControl>
    )
  }
)

Input.displayName = 'Input'
