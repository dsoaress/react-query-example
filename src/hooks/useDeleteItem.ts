import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useQueryHelpers } from './useQueryHelpers'
import { useToast } from './useToast'

type Options = {
  message?: string
  redirect?: string
}

async function deleteItem(resource: Resources, id: string) {
  await api.delete(`${apiRoutes[resource]}/${id}`)
}

export function useDeleteItem(resource: Resources, id: string, { message, redirect }: Options) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { itemQueryKey } = useQueryHelpers(resource)
  const toast = useToast()

  const mutation = useMutation(itemQueryKey(id), () => deleteItem(resource, id), {
    onSuccess: () => {
      message && toast({ title: message, status: 'success' })
      queryClient.removeQueries(resource)
      redirect && navigate(redirect)
    },
    onError: (error: ApiResponseError) => {
      toast({ title: error.message, status: 'error' })
    }
  })

  return {
    deleteItem: mutation.mutate,
    isDeleting: mutation.isLoading
  }
}
