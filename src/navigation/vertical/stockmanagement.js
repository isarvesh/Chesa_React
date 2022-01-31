// ** Icons Import
import { PlusSquare, Circle } from 'react-feather'

export default [
  {
    id: 'stockmanagement',
    title: 'Stock Management',
    icon: <PlusSquare size={20} />,
    children: [
      {
        id: 'categories',
        title: 'Categories',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'addProduct',
        title: 'Add Product',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/',
        collapsed: true
      },
      {
        id: 'listProduct',
        title: 'Product List',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/'
      },
      {
        id: 'printBarcode',
        title: 'Print Barcode',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        },
       {
        id: 'manageSuppliers',
        title: 'Manage Suppliers',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        },
        {
        id: 'manageStock',
        title: 'Manage Stock',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        },
        {
        id: 'purchaseInvoice',
        title: 'Purchase Invoice',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        },
        {
        id: 'dispenseIndent',
        title: 'Dispense Indent',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
        },
        {
        id: 'inventoryReport',
        title: 'Inventory Report',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/' 
      }
    ]
  }

]
