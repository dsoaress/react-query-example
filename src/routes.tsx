import { Navigate, Route, Routes as ReactRoutes } from 'react-router-dom'

import { PrivateLayout } from './layouts/PrivateLayout'
import { PublicLayout } from './layouts/PublicLayout'
import { NotFound } from './pages/404'
import { Professors } from './pages/dashboard/professors'
import { EditProfessor } from './pages/dashboard/professors/edit'
import { NewProfessor } from './pages/dashboard/professors/new'
import { Students } from './pages/dashboard/students'
import { EditStudent } from './pages/dashboard/students/edit'
import { NewStudent } from './pages/dashboard/students/new'
import { Login } from './pages/login'

export function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<Navigate to="/dashboard/students" replace />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/students" replace />} />

      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route path="students">
          <Route index element={<Students />} />
          <Route path="edit" element={<EditStudent />} />
          <Route path="new" element={<NewStudent />} />
        </Route>

        <Route path="professors">
          <Route index element={<Professors />} />
          <Route path="edit" element={<EditProfessor />} />
          <Route path="new" element={<NewProfessor />} />
        </Route>
      </Route>

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  )
}
