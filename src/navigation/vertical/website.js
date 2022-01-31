// ** Icons Import
import { Layout, Circle } from 'react-feather'

export default [
  {
    header: 'Website Changes'
  },
  {
    id: 'website',
    title: 'Website',
    badge: 'light-danger',
    badgeText: '11',
    icon: <Layout size={20} />,
    children: [
      {
        id: 'settings',
        title: 'Settings',
        icon: <Circle size={12} />,
        navLink: '/charts/apex'
      },
      {
        id: 'templateassign',
        title: 'Template Assign',
        icon: <Circle size={12} />,
        navLink: '/charts/chartjs'
      },
      {
        id: 'aboutus',
        title: 'About Us',
        icon: <Circle size={12} />,
        navLink: '/charts/recharts'
      }
    ]
  }
]
