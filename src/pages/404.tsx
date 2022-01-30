import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react'

export function NotFound() {
  return (
    <Box pos="fixed" inset={0}>
      <Center h="100%" textAlign="center">
        <Stack>
          <Heading>404:</Heading>
          <Text>Page not found</Text>
        </Stack>
      </Center>
    </Box>
  )
}
