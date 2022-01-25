import {
  Box,
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack
} from '@chakra-ui/react'

import { PasswordInput } from './PasswordInput'

export function LoginForm(props: HTMLChakraProps<'form'>) {
  return (
    <Box py="8" px={{ base: '4', md: '10' }} shadow="base" rounded={{ sm: 'lg' }}>
      <chakra.form
        onSubmit={e => {
          e.preventDefault()
          // login logic here
        }}
        {...props}
      >
        <Stack spacing="6">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input name="email" type="email" autoComplete="email" required />
          </FormControl>
          <PasswordInput />
          <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
            Sign in
          </Button>
        </Stack>
      </chakra.form>
    </Box>
  )
}
