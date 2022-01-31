import { lazy } from 'react'

const DepartmentRoutes = [
  // Dashboards
  {
    path: '/departments',
    component: lazy(() => import('../../views/department'))
  }
]

export default DepartmentRoutes
