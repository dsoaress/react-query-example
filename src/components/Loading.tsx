import { Box, Center, Spinner } from '@chakra-ui/react'

export function Loading() {
  return (
    <Box pos="fixed" inset={0}>
      <Center h="100%">
        <Spinner color="blue.600" size="md" />
      </Center>
    </Box>
  )
}
