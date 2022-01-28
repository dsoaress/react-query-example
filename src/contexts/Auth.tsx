import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUserProfile, loginUser } from '../services/auth'
import { ApiResponseError } from '../types/Api'
import { User } from '../types/Resources'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../utils/localStorage'

type LoginData = {
  email: string
  password: string
}

type AuthContextProps = {
  user: User | null
  isAuthenticated: boolean
  isAuthenticating: boolean
  isLoading: boolean
  login: (loginData: LoginData) => void
  logout: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [isLoading, setIsLoading] = useState(!user)
  const navigate = useNavigate()

  const login = ({ email, password }: LoginData) => {
    setIsAuthenticating(true)
    loginUser(email, password)
      .then(({ data }) => {
        setUser(data)
        setIsAuthenticated(true)
        console.log(`Welcome ${data.name}!`)
        setLocalStorage('user', {
          id: data.id,
          accessToken: data.accessToken
        })
      })
      .then(() => navigate('/', { replace: true }))
      .catch((error: ApiResponseError) => {
        if (error.response?.status === 400) console.log('Invalid email or password')
        else console.log('Something went wrong')
      })
      .finally(() => setIsAuthenticating(false))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    removeLocalStorage('user')
  }

  useEffect(() => {
    const localStorage = getLocalStorage<{ id: string; accessToken: string }>('user')

    if (localStorage) {
      const { id, accessToken } = localStorage
      getUserProfile(id, accessToken)
        .then(({ data }) => {
          setUser(data)
          setIsAuthenticated(true)
        })
        .catch(() => logout())
        .finally(() => setIsLoading(false))
    } else {
      setIsLoading(false)
      logout()
    }
  }, [])

  const value = { user, isAuthenticated, isAuthenticating, isLoading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
