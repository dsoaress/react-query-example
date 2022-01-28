import { Pagination } from '../../components/Pagination'
import { PersonsList } from '../../components/PersonsList'
import { useGetItems } from '../../hooks/useGetItems'
import { Person } from '../../types/Resources'

export function Students() {
  const { query } = useGetItems<Person[]>('students')

  return (
    <>
      <PersonsList
        resource="students"
        title="Students"
        persons={query.data?.items}
        isLoading={query.isLoading}
        isRefetching={query.isRefetching}
      />
      <Pagination resource="students" />
    </>
  )
}
