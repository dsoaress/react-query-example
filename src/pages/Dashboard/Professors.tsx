import { Pagination } from '../../components/Pagination'
import { PersonsList } from '../../components/PersonsList'
import { useGetItems } from '../../hooks/useGetItems'
import { Person } from '../../types/Resources'

export function Professors() {
  const { query } = useGetItems<Person[]>('professors')

  return (
    <>
      <PersonsList
        resource="professors"
        title="Professors"
        persons={query.data?.items}
        isLoading={query.isLoading}
        isRefetching={query.isRefetching}
      />
      <Pagination resource="professors" />
    </>
  )
}
