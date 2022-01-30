import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { api, apiRoutes } from '../services/api'
import { Resources } from '../types/Resources'
import { useQueryHelpers } from './useQueryHelpers'

export async function getItem<T>(resource: Resources, id: string) {
  const { data: item } = await api.get<T>(`${apiRoutes[resource]}/${id}`)
  return { item }
}

export function useGetItem<T>(resource: Resources, id: string) {
  const { itemQueryKey } = useQueryHelpers(resource)
  const navigate = useNavigate()

  const query = useQuery(itemQueryKey(id), () => getItem<T>(resource, id), {
    onError: () => navigate('/404')
  })

  return { query }
}
