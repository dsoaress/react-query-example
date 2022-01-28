import { Box, Heading } from '@chakra-ui/react'

import { Logo } from '../assets/Logo'
import { LoginForm } from '../components/LoginForm'

export function Login() {
  return (
    <Box bg="gray.50" minH="100vh" py="20" px={{ base: '4', lg: '8' }}>
      <Box maxW="md" mx="auto">
        <Logo mx="auto" h="8" mb={{ base: '10', md: '20' }} />
        <Heading textAlign="center" size="lg" fontWeight="extrabold" mb="8">
          Sign in to your account
        </Heading>
        <LoginForm />
      </Box>
    </Box>
  )
}
