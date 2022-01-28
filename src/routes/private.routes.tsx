import { Route, Routes } from 'react-router-dom'

import { PrivateLayout } from '../layouts/PrivateLayout'
import { Professors } from '../pages/dashboard/professors'
import { Students } from '../pages/dashboard/students'

export function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route path="students" element={<Students />} />
        <Route path="professors" element={<Professors />} />
      </Route>
    </Routes>
  )
}
