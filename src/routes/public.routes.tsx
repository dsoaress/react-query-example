import { Route, Routes } from 'react-router-dom'

import { PublicLayout } from '../layouts/PublicLayout'
import { Login } from '../pages/login'

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
