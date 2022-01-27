import { Navigate, Route, Routes as Router } from 'react-router-dom'

import { RequireAuth } from './components/RequireAuth'
import { Login } from './pages/Login'
import { Professors } from './pages/Professors'
import { Students } from './pages/Students'

export function Routes() {
  return (
    <Router>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />

      {/* Redirects */}
      <Route path="/" element={<Navigate to="/students" />} />

      {/* Private routes */}
      <Route path="/students" element={<RequireAuth element={<Students />} />} />
      <Route path="/professors" element={<RequireAuth element={<Professors />} />} />
    </Router>
  )
}
