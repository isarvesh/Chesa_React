// ** Icons Import
import { Clock, MessageSquare, CheckSquare } from 'react-feather'

export default [
  {
    header: 'Tools'
  },
  
  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },

  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  
  {
    id: 'calendar',
    title: 'Schedule',
    icon: <Clock size={20} />,
    navLink: '/apps/calendar'
  }
]
