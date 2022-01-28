import { Heading, HStack, Spinner, Stack } from '@chakra-ui/react'

import { useMetadata } from '../hooks/useContext'
import { Person, Resources } from '../types/Resources'
import { Filter } from './Filter'
import { PersonCard } from './PersonCard'
import { PersonsListSkeleton } from './PersonsListSkeleton'

type PersonsListProps = {
  resource: Resources
  persons?: Person[]
  title: string
  isLoading: boolean
  isRefetching: boolean
}

export function PersonsList({
  resource,
  persons,
  title,
  isLoading,
  isRefetching
}: PersonsListProps) {
  const { personsPerPage } = useMetadata()

  return (
    <Stack spacing={4}>
      <HStack spacing="4" align="center" mb="4">
        <Filter resource={resource} />
        <Heading>{title}</Heading>
        {isRefetching && <Spinner size="xs" color="gray.300" />}
      </HStack>
      {isLoading ? (
        <PersonsListSkeleton personsPerPage={personsPerPage[resource]} />
      ) : (
        persons?.map(person => <PersonCard key={person.id} {...person} />)
      )}
    </Stack>
  )
}
