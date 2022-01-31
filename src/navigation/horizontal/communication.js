// ** Icons Import
import { MessageCircle, Circle } from 'react-feather'

export default [
  {
    id: 'communication',
    title: 'Communication',
    icon: <MessageCircle size={20} />,
    children: [
      {
        id: 'sendSMS',
        title: 'Send SMS / Email',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'templateSMS',
        title: 'SMS & Email Template',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/',
        collapsed: true
      },
      {
        id: 'reportSMS',
        title: 'SMS Report',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'MarketingCampaign',
        title: 'Marketing Campaign',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
        
      }
    ]
  }

]
