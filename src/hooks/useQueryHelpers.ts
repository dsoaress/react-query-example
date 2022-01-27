import { Resources } from '../types/Resources'
import { useMetadata } from './useContext'

export function useQueryHelpers(resource: Resources) {
  const { itemsPerPage, filter } = useMetadata()

  const itemQueryKey = (id: string) => [resource, { id }]

  const itemsQueryKey = (page: number) => [
    resource,
    { page },
    { itemsPerPage: itemsPerPage[resource] },
    { filter: filter[resource] }
  ]

  return { itemQueryKey, itemsQueryKey }
}
