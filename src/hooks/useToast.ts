import { useToast as useChakraToast } from '@chakra-ui/react'

export function useToast() {
  return useChakraToast({
    position: 'top',
    duration: 4000,
    isClosable: true
  })
}
