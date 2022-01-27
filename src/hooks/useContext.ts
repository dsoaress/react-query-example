import { useContext as useReactContext } from 'react'

import { AuthContext } from '../contexts/Auth'

export const useAuth = () => useReactContext(AuthContext)
