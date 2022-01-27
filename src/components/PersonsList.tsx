import { Heading, HStack, Spinner, Stack } from '@chakra-ui/react'

import { Person, Resources } from '../types/Resources'
import { PersonCard } from './PersonCard'

type PersonsListProps = {
  resource: Resources
  persons?: Person[]
  title: string
  isRefetching: boolean
}

export function PersonsList({ resource, persons, title, isRefetching }: PersonsListProps) {
  return (
    <Stack spacing={4}>
      <HStack spacing="4" align="center" mb="4">
        <Heading>{title}</Heading>
        {isRefetching && <Spinner size="xs" color="gray.300" />}
      </HStack>
      {persons?.map(person => (
        <PersonCard key={person.id} resource={resource} {...person} />
      ))}
    </Stack>
  )
}
