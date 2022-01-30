import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'

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

  const mutation = useMutation(() => postItem<T>(resource, newItem), {
    onMutate: () => message && console.log('Saving...'),
    onSuccess: (_data, _variables, context) => {
      message &&
        console.log(message, {
          id: context
        })
      setNewItem(initialData)
      queryClient.removeQueries(resource)
      redirect && navigate(redirect)
    },
    onError: (error: ApiResponseError, _variables, context) => {
      console.log(error.message, {
        id: context
      })
    }
  })

  return {
    mutation,
    newItem,
    setNewItem
  }
}
