import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/useContext'
import { Loading } from './Loading'

type RequireAuthProps = {
  element: JSX.Element
}

export function RequireAuth({ element }: RequireAuthProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return <Loading />
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />

  return element
}
