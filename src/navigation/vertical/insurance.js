// ** Icons Import
import {  FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Navigations'
  },
  
  {
    id: 'insurance',
    title: 'Insurance',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'insurance_Add',
        title: 'Add Insurance',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      {
        id: 'insurance_List',
        title: 'Insurance List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/preview'
      },
      {
        id: 'insurance_LimitApproval',
        title: 'Limit Approval',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/edit'
      }
      
    ]
  }

  
]
