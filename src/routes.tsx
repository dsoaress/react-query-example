import { Route, Routes as Router } from 'react-router-dom'

import { RequireAuth } from './components/RequireAuth'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export function Routes() {
  return (
    <Router>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />

      {/* Private routes */}
      <Route path="/" element={<RequireAuth element={<Home />} />} />
    </Router>
  )
}
