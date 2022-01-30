import { Flex, Heading, HStack, IconButton, Spinner, Stack } from '@chakra-ui/react'
import { FiPlusCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  return (
    <Stack spacing={4}>
      <Flex align="center" justify="space-between" mb="4">
        <Heading>{title}</Heading>
        <HStack>
          {isRefetching && <Spinner size="xs" color="gray.300" />}
          <Filter resource={resource} />
          <IconButton
            aria-label={`add new ${resource}`}
            icon={<FiPlusCircle />}
            colorScheme="blue"
            onClick={() => navigate('new')}
          />
        </HStack>
      </Flex>
      {isLoading ? (
        <PersonsListSkeleton personsPerPage={personsPerPage[resource]} />
      ) : (
        persons?.map(person => <PersonCard key={person.id} resource={resource} {...person} />)
      )}
    </Stack>
  )
}
