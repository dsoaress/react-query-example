import { Navigate, Outlet } from 'react-router-dom'

import { Loading } from '../components/Loading'
import { useAuth } from '../hooks/useContext'

export function PublicLayout() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return <Loading />
  if (isAuthenticated) return <Navigate to="/" replace />

  return <Outlet />
}
