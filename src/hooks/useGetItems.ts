import { useCallback } from 'react'
import { useQuery } from 'react-query'

import { api, apiRoutes } from '../services/api'
import { ApiResponseError } from '../types/Api'
import { Resources } from '../types/Resources'
import { useQueryHelpers } from './useQueryHelpers'

type Filter = {
  sort: string
  order: string
}

const page = {
  students: 1,
  professors: 1
}

const itemsPerPage = {
  students: 10,
  professors: 10
}

const filter = {
  students: {
    sort: 'name',
    order: 'asc'
  },
  professors: {
    sort: 'name',
    order: 'asc'
  }
}

export async function getItems<T>(
  resource: Resources,
  page: number,
  itemsPerPage: number,
  filter: Filter
) {
  const { data: items, headers } = await api.get<T>(apiRoutes[resource], {
    params: {
      _sort: filter.sort,
      _order: filter.order,
      _page: page,
      _limit: itemsPerPage
    }
  })

  const totalPages = Math.ceil(Number(headers['x-total-count']) / itemsPerPage)
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
  const { itemsQueryKey } = useQueryHelpers(resource)

  const fetcher = useCallback(
    <T>(page: number) => getItems<T>(resource, page, itemsPerPage[resource], filter[resource]),
    [resource]
  )

  const query = useQuery(itemsQueryKey(page[resource]), () => fetcher<T>(page[resource]), {
    onError: (error: ApiResponseError) => {
      console.log(error.message)
    }
  })

  return { query }
}
