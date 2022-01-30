import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useQueryHelpers } from './useQueryHelpers'

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
  const mutation = useMutation(itemQueryKey(id), () => deleteItem(resource, id), {
    onMutate: () => message && console.log('Deleting...'),
    onSuccess: (_data, _variables, context) => {
      message &&
        console.log(message, {
          id: context
        })
      queryClient.removeQueries(resource)
      redirect && navigate(redirect)
    },
    onError: (error: ApiResponseError, _variables, context) =>
      console.log(error.message, {
        id: context
      })
  })

  return { deleteItem: mutation.mutate }
}
