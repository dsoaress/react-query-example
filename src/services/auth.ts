import { User } from '../types/Resources'
import { api, apiRoutes } from './api'

type LoginResponse = {
  accessToken: string
  user: {
    id: string
    name: string
    email: string
    createdAt: string
  }
}

export async function loginUser(email: string, password: string) {
  const { data } = await api.post<LoginResponse>(apiRoutes.login, { email, password })
  api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`

  return {
    data: {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
      createdAt: data.user.createdAt,
      accessToken: data.accessToken
    }
  }
}

export async function getUserProfile(id: string, accessToken: string) {
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  const { data: user } = await api.get<User>(`${apiRoutes.users}/${id}`)

  return {
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    }
  }
}
