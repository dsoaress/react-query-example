import { useCallback, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useMetadata } from './useContext'
import { useQueryHelpers } from './useQueryHelpers'

type Filter = {
  sort: string
  order: string
}

export async function getItems<T>(
  resource: Resources,
  page: number,
  PersonsPerPage: number,
  filter: Filter
) {
  const { data: items, headers } = await api.get<T>(apiRoutes[resource], {
    params: {
      _sort: filter.sort,
      _order: filter.order,
      _page: page,
      _limit: PersonsPerPage
    }
  })

  const totalPages = Math.ceil(Number(headers['x-total-count']) / PersonsPerPage)
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1

  return {
    totalPages,
    hasNextPage,
    hasPreviousPage,
    items
  }
}

export function useGetItems<T>(resource: Resources) {
  const queryClient = useQueryClient()
  const metadata = useMetadata()
  const { setPage, setTotalPages } = metadata
  const { itemsQueryKey } = useQueryHelpers(resource)

  const page = metadata.page[resource]
  const personsPerPage = metadata.personsPerPage[resource]
  const filter = metadata.filter[resource]

  const fetcher = useCallback(
    <T>(page: number) => getItems<T>(resource, page, personsPerPage, filter),
    [filter, personsPerPage, resource]
  )

  const query = useQuery(itemsQueryKey(page), () => fetcher<T>(page), {
    onError: (error: ApiResponseError) => console.log(error.message)
  })

  const setPagesInfo = useCallback(() => {
    if (query.data) {
      setTotalPages(prev => ({ ...prev, [resource]: query.data.totalPages }))
      if (page > query.data.totalPages)
        setPage(prev => ({ ...prev, [resource]: query.data.totalPages }))
    }
  }, [page, query.data, resource, setPage, setTotalPages])

  const prefetchPages = useCallback(() => {
    if (query.data) {
      if (query.data.hasPreviousPage) {
        queryClient.prefetchQuery(itemsQueryKey(page - 1), () => fetcher<T>(page - 1))
      }

      if (query.data.hasNextPage) {
        queryClient.prefetchQuery(itemsQueryKey(page + 1), () => fetcher<T>(page + 1))
      }
    }
  }, [fetcher, itemsQueryKey, page, query.data, queryClient])

  useEffect(() => setPagesInfo(), [setPagesInfo])
  useEffect(() => prefetchPages(), [prefetchPages])

  return { query }
}
