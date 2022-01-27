import { Link } from '@chakra-ui/react'
import { LinkProps, NavLink as ReactNavLink } from 'react-router-dom'

export function NavLink(props: LinkProps) {
  return (
    <Link
      as={ReactNavLink}
      color="white"
      fontWeight="bold"
      textDecoration="none"
      transition="all 0.2s ease-in-out"
      px={3}
      py={2}
      rounded="md"
      _hover={{ color: 'blue.200', textDecoration: 'none', bg: 'blue.800', boxShadow: 'lg' }}
      _activeLink={{ bg: 'blue.800', boxShadow: 'lg' }}
      {...props}
    />
  )
}
