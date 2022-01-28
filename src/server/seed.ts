import faker from '@faker-js/faker'
import { hashSync } from 'bcryptjs'
import { v4 as uuid } from 'uuid'

import { Person, Resources, User } from '../types/Resources'

type Data = {
  [key in Resources | 'users']: Person[] | User[]
}

export function Seed() {
  const data: Data = {
    users: [],
    professors: [],
    students: []
  }

  data.users.push({
    id: 'b940b086-fdb5-403b-9ef4-377c0d517123',
    avatar: 'https://github.com/dsoaress.png',
    name: 'Daniel Soares',
    email: 'admin@admin.com',
    password: hashSync('12345678', 10),
    createdAt: new Date().toISOString()
  })

  function fakePersons() {
    data.professors = []
    data.students = []

    for (let i = 1; i <= 100; i++) {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()

      data.students.push({
        id: uuid(),
        avatar: faker.image.avatar(),
        name: `${firstName} ${lastName}`,
        email: `${firstName}.${lastName}@student.university.edu`.toLowerCase(),
        createdAt: faker.date.recent().toISOString()
      })
    }

    for (let i = 1; i <= 25; i++) {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()

      data.professors.push({
        id: uuid(),
        avatar: faker.image.avatar(),
        name: `${firstName} ${lastName}`,
        email: `${firstName}.${lastName}@university.edu`.toLowerCase(),
        createdAt: faker.date.recent().toISOString()
      })
    }
  }

  fakePersons()
  setInterval(fakePersons, 1000 * 60 * 60 * 1) // 1 hour

  return data
}
