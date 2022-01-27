import { Layout } from '../components/Layout'
import { PersonsList } from '../components/PersonsList'
import { useGetItems } from '../hooks/useGetItems'
import { Person } from '../types/Resources'

export function Home() {
  const { query } = useGetItems<Person[]>('students')

  return (
    <Layout>
      <PersonsList resource="students" persons={query.data?.items} />
    </Layout>
  )
}
