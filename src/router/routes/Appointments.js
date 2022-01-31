import { lazy } from 'react'

const AppointmentRoutes = [
  // Appointments Table
  {
    path: '/appointments',
    component: lazy(() => import('../../views/appointment'))
  }
]

export default AppointmentRoutes
