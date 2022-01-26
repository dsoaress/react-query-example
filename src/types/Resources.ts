export type Resources = 'students' | 'professors' | 'users'

export type Person = {
  id: string
  avatar?: string
  name: string
  email: string
  createdAt: string
}

export type User = Person & {
  password?: string
}
