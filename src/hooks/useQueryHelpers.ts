import { Resources } from '../types/Resources'

export function useQueryHelpers(resource: Resources) {
  const itemQueryKey = (id: string) => [resource, { id }]

  const itemsQueryKey = (page: number) => [resource, { page }]

  return { itemQueryKey, itemsQueryKey }
}
