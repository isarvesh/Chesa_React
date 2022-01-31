

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})


// ** Table Intl Column
export const multiLingColumns = [
  {
    sortable: true,
    name: 'Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Date',
    minWidth: '220px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Purpose',
    minWidth: '150px',
    selector: row => row.purpose
  },
  {
    sortable: true,
    name: 'Paid Amount',
    minWidth: '250px',
    selector: row => row.amount
  },
  {
    sortable: true,
    name: 'Payment Mode',
    minWidth: '180px',
    selector: row => row.payment_mode
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Edit size={15} />
                <span className='align-middle ms-50'>Edit</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]
