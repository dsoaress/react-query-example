import { Heading, Stack } from '@chakra-ui/react'

import { Person, Resources } from '../types/Resources'
import { PersonCard } from './PersonCard'

type PersonsListProps = {
  resource: Resources
  persons?: Person[]
  title: string
}

export function PersonsList({ resource, persons, title }: PersonsListProps) {
  return (
    <Stack spacing={4}>
      <Heading mb={4}>{title}</Heading>
      {persons?.map(person => (
        <PersonCard key={person.id} resource={resource} {...person} />
      ))}
    </Stack>
  )
}
