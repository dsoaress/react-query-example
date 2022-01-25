import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as ReactLink, LinkProps } from 'react-router-dom'

export function Link(props: LinkProps & ChakraLinkProps) {
  return <ChakraLink as={ReactLink} color="blue.500" _hover={{ color: 'blue.600' }} {...props} />
}
