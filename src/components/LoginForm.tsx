import { Box, chakra, Stack } from '@chakra-ui/react'
import { useState } from 'react'

import { useAuth } from '../hooks/useContext'
import { Button } from './Button'
import { Input } from './Input'
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
          <Input
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
          />
          <PasswordInput
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <Button
            type="submit"
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
