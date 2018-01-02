import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'

const CricketerNameList = props => {
  let listItem = props.allCricketerData.map(cricketer => (
        <ListGroupItem onClick={e => props.onCricketerNameSelect(e, cricketer)}>
          {cricketer.name}
        </ListGroupItem>
  ))
  return (
    <Row>
      <Col xs={12} md={9} className='calc'>
        <ListGroup>
          {listItem}
        </ListGroup>
      </Col>
    </Row>
    
  )
}

export default CricketerNameList
