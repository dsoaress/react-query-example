import { Box, Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { Loading } from '../../../components/Loading'
import { useDeleteItem } from '../../../hooks/useDeleteItem'
import { usePathItem } from '../../../hooks/usePathItem'
import { Person, Resources } from '../../../types/Resources'

export function EditStudent() {
  const navigate = useNavigate()
  const { state } = useLocation() as { state: { id: string; resource: Resources } }

  const { mutation, item, setItem, isLoading } = usePathItem<Person>(state.resource, state.id, {
    message: 'Student updated successfully',
    redirect: '/dashboard/students'
  })
  const { deleteItem, isDeleting } = useDeleteItem(state.resource, state.id, {
    message: 'Student deleted successfully',
    redirect: '/dashboard/students'
  })

  if (isLoading) return <Loading />

  return (
    <Box>
      <Heading mb="4">Edit student</Heading>
      <Stack spacing={6}>
        <Input
          name="name"
          label="Name"
          value={item?.name || ''}
          onChange={e => {
            item && setItem({ ...item, name: e.target.value })
          }}
        />

        <Input
          name="email"
          label="Email"
          value={item?.email || ''}
          onChange={e => {
            item && setItem({ ...item, email: e.target.value })
          }}
        />

        <Flex justify="space-between">
          <Button colorScheme="red" isLoading={isDeleting} mr={3} onClick={() => deleteItem()}>
            Delete
          </Button>
          <HStack>
            <Button variant="outline" onClick={() => navigate('/dashboard/students')}>
              Back
            </Button>
            <Button isLoading={mutation.isLoading} onClick={() => mutation.mutate()}>
              Save
            </Button>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
