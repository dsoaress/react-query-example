import { Box } from '@chakra-ui/react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { useAuth } from '../hooks/useContext'

export function PrivateLayout() {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return <Loading />
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />

  return (
    <>
      <Header />
      <Box mx="auto" mt="120px" maxW="container.md">
        <Outlet />
      </Box>
    </>
  )
}
