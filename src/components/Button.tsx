import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export function Button(props: ButtonProps) {
  return <ChakraButton colorScheme="blue" {...props} />
}
