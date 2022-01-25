import { Route, Routes as Router } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Router>
  )
}
