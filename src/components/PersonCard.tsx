import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react'

import { Person } from '../types/Resources'
import { Link } from './Link'

export function PersonCard({ id, avatar, name, email }: Person) {
  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      rounded={{ sm: 'lg' }}
      boxShadow="base"
      border={1}
      borderColor="gray.400"
      bg="gray.50"
    >
      <HStack spacing={4}>
        <Avatar size="md" name={name} src={avatar} />
        <Box>
          <Text fontWeight="bold" fontSize={14} color="blue.600">
            {name}
          </Text>
          <Text fontSize={12} color="gray.500">
            {email}
          </Text>
        </Box>
      </HStack>
      <Link to={id}>Edit</Link>
    </Flex>
  )
}
