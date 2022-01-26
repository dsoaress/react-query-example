import { Stack } from '@chakra-ui/react'

import { Person, Resources } from '../types/Resources'
import { PersonCard } from './PersonCard'

type PersonsListProps = {
  resource: Resources
  persons?: Person[]
}

export function PersonsList({ resource, persons }: PersonsListProps) {
  return (
    <Stack spacing={4}>
      {persons?.map(person => (
        <PersonCard key={person.id} resource={resource} {...person} />
      ))}
    </Stack>
  )
}
