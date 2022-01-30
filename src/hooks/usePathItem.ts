import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useGetItem } from './useGetItem'

type Options = {
  message?: string
  redirect?: string
}

async function patchItem<T>(resource: Resources, id: string, item: T) {
  const { data: patchedItem } = await api.patch<T>(`${apiRoutes[resource]}/${id}`, item)
  return { patchedItem }
}

export function usePathItem<T>(resource: Resources, id: string, { message, redirect }: Options) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { query } = useGetItem<T>(resource, id)
  const [item, setItem] = useState<T>()
  const toast = useToast()
  const initialItem = query.data?.item

  useEffect(() => initialItem && setItem(initialItem), [initialItem])

  const mutation = useMutation(() => patchItem(resource, id, item), {
    onSuccess: () => {
      toast({ title: message || 'Saved', status: 'success' })
      queryClient.removeQueries(resource)
      redirect && navigate(redirect)
    },
    onError: (error: ApiResponseError) => {
      toast({ title: error.message, status: 'error' })
    }
  })

  return {
    isLoading: query.isLoading,
    mutation,
    item,
    setItem
  }
}
