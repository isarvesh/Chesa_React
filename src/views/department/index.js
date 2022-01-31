// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
import DataTablesReOrder from './DataTablesReOrder'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Department = () => {
   return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Department' breadCrumbParent='Department List' breadCrumbActive='Department' />
      <Row>
        
        <Col sm='12'>
          <DataTablesReOrder />
        </Col>
        
      </Row>
    </Fragment>
  )
}

export default Department