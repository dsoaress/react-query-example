import { Navigate, Route, Routes } from 'react-router-dom'

export function RedirectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/students" replace />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/students" replace />} />
    </Routes>
  )
}
