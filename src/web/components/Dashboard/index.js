import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import CricketerNameList from '../../containers/CricketerNameList'
import CricketerDetails from '../../containers/CricketerDetails'

const Dashboard = props => {

  return (
    <Row>
      <Col xs={12} md={3} className='calc'>
        <CricketerNameList />
      </Col>
      <Col xs={12} md={7} className='calc'>
        <CricketerDetails />
      </Col>
    </Row>
    
  )
}

export default Dashboard
