import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { usePostItem } from '../../../hooks/usePostItem'
import { Person } from '../../../types/Resources'

export function NewStudent() {
  const navigate = useNavigate()
  const initialData = { id: '', name: '', email: '', createdAt: '' }
  const { mutation, newItem, setNewItem } = usePostItem<Person>('students', initialData, {
    message: 'Student created',
    redirect: '/dashboard/students'
  })
  const disabledSaveButton = !newItem.name || !newItem.email

  return (
    <Box>
      <Heading mb="4">Add new student</Heading>
      <Stack spacing={6}>
        <Input
          name="name"
          type="text"
          label="Name"
          value={newItem.name}
          onChange={e => setNewItem(prev => ({ ...prev, name: e.target.value }))}
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={newItem.email}
          onChange={e => setNewItem(prev => ({ ...prev, email: e.target.value }))}
        />

        <HStack>
          <Button variant="outline" mr={3} onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button
            onClick={() => mutation.mutate()}
            isLoading={mutation.isLoading}
            disabled={disabledSaveButton}
          >
            Save
          </Button>
        </HStack>
      </Stack>
    </Box>
  )
}
