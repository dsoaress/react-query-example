import { Route, Routes } from 'react-router-dom'

import { PrivateLayout } from '../Layouts/PrivateLayout'
import { Professors } from '../pages/Dashboard/Professors'
import { Students } from '../pages/Dashboard/Students'

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
