import { Route, Routes } from 'react-router-dom'

import { PublicLayout } from '../Layouts/PublicLayout'
import { Login } from '../pages/Login'

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
