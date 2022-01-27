import { Resources } from '../types/Resources'
import { useMetadata } from './useContext'

export function useQueryHelpers(resource: Resources) {
  const { personsPerPage, filter } = useMetadata()

  const itemQueryKey = (id: string) => [resource, { id }]

  const itemsQueryKey = (page: number) => [
    resource,
    { page },
    { personsPerPage: personsPerPage[resource] },
    { filter: filter[resource] }
  ]

  return { itemQueryKey, itemsQueryKey }
}
