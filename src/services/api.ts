import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3010'
})

export const apiRoutes = {
  login: 'login',
  users: 'users',
  students: 'students',
  professors: 'professors'
}
