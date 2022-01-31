// ** Icons Import
import { UserCheck, Circle } from 'react-feather'

export default [
  {
    id: 'staffmanagement',
    title: 'Staff Management',
    icon: <UserCheck size={20} />,
    children: [
      {
        id: 'listStaff',
        title: 'Staff List',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'addStaff',
        title: 'Add Staff',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/',
        collapsed: true
      }
      
    ]
  }

]
