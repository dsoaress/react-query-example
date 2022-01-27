import 'dotenv/config'

import jsonServer from 'json-server'
import auth from 'json-server-auth'
import { v4 as uuid } from 'uuid'

import { Seed } from './seed'

const server = jsonServer.create()
const router = jsonServer.router(Seed())
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3010
const delay = process.env.DELAY || 1000 // 1 second

const rules = auth.rewriter({
  users: 660,
  students: 660,
  professors: 660
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
server.db = router.db
server.use(jsonServer.bodyParser)
server.use((req, _res, next) => {
  if (req.method === 'POST') {
    req.body.id = uuid()
    req.body.createdAt = new Date().toISOString()
  }

  next()
})

server.use((_req, _res, next) => setTimeout(next, +delay))
server.use(middlewares)
server.use(rules)
server.use(auth)
server.use(router)

server.listen(port, () => console.log(`Server is running on port ${port}`))
