import { Box, Flex, HStack } from '@chakra-ui/react'

import { Logo } from '../assets/Logo'
import { NavLink } from './NavLink'
import { ProfileMenu } from './ProfileMenu'

export function Header() {
  return (
    <Box
      as="header"
      bg="blue.900"
      p={4}
      boxShadow="lg"
      pos="fixed"
      top={0}
      w="100%"
      zIndex="banner"
    >
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Logo color="white" h="6" />
        <HStack as="nav" spacing={4}>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/professors">Professors</NavLink>
          <ProfileMenu />
        </HStack>
      </Flex>
    </Box>
  )
}
