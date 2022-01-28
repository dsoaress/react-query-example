import { Box, Button, chakra, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useState } from 'react'

import { useAuth } from '../hooks/useContext'
import { PasswordInput } from './PasswordInput'

export function LoginForm() {
  const { login, isAuthenticating } = useAuth()
  const [user, setUser] = useState({ email: '', password: '' })

  const disabled = !user.email || !user.password

  return (
    <Box py="8" px={{ base: '4', md: '10' }} shadow="base" rounded={{ sm: 'lg' }}>
      <chakra.form
        onSubmit={e => {
          e.preventDefault()
          login(user)
        }}
      >
        <Stack spacing="6">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
              required
            />
          </FormControl>
          <PasswordInput
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            fontSize="md"
            isLoading={isAuthenticating}
            disabled={disabled}
          >
            Sign in
          </Button>
        </Stack>
      </chakra.form>
    </Box>
  )
}
