import { Layout } from '../components/Layout'
import { PersonsList } from '../components/PersonsList'
import { useGetItems } from '../hooks/useGetItems'
import { Person } from '../types/Resources'

export function Students() {
  const { query } = useGetItems<Person[]>('students')

  return (
    <Layout>
      <PersonsList
        resource="students"
        title="Students"
        persons={query.data?.items}
        isLoading={query.isLoading}
        isRefetching={query.isRefetching}
      />
    </Layout>
  )
}
