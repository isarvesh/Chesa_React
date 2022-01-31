// ** Icons Import
import { Settings, Circle } from 'react-feather'

export default [
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    children: [
      {
        id: 'profile',
        title: 'Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'editProfile',
        title: 'Edit Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
        
      },
      {
        id: 'resourceCenter',
        title: 'Resource Center',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'consultant',
        title: 'Consultant',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        }
       
    ]
  }

]
