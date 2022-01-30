import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useToast } from './useToast'

type Options = {
  message?: string
  redirect?: string
}

async function postItem<T>(resource: Resources, newItem: T) {
  const id = uuid()
  const createdAt = new Date().toISOString()
  const { data: item } = await api.post<T>(apiRoutes[resource], { ...newItem, id, createdAt })
  return { item }
}

export function usePostItem<T>(
  resource: Resources,
  initialData: T,
  { message, redirect }: Options
) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState(initialData)
  const toast = useToast()

  const mutation = useMutation(() => postItem<T>(resource, newItem), {
    onSuccess: () => {
      message && toast({ title: message, status: 'success' })
      setNewItem(initialData)
      queryClient.removeQueries(resource)
      redirect && navigate(redirect)
    },
    onError: (error: ApiResponseError) => {
      toast({ title: error.message, status: 'error' })
    }
  })

  return {
    mutation,
    newItem,
    setNewItem
  }
}
