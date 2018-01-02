import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row, Button } from 'react-bootstrap'
import FormComponent from './FormComponent'
import Modal from 'react-modal';
import CricketerInfo from '../../containers/CricketerInfo'

const CricketerDetails = (props) => {
  return (
    <Row>
    {props.cricketerData ? 
    <div>
      <Col md={6}>
        <FormComponent label='Name' data={props.cricketerData.name}/>
        <FormComponent label='Date Of Birth' data={props.cricketerData.dob}/>
        <FormComponent label='ODI Runs' data={props.cricketerData.odiRun}/>
        <FormComponent label='Test Runs' data={props.cricketerData.testRun}/>
        <FormComponent label='IPL Runs' data={props.cricketerData.iplRun}/>
        <FormComponent label='20-20 Runs' data={props.cricketerData.twentyRun}/>
        <FormComponent label='IPL Team' data={props.cricketerData.ipmTeam}/>
        <FormComponent label='Average' data={props.cricketerData.average}/>
        <Col md={12} className="cricketer-details-edit-button">
          <Button bsStyle="success" bsSize="large" onClick={props.onEditDetailsClick}><span className="glyphicon glyphicon-pencil" />Edit</Button>
        </Col>
      </Col>
      <Col md={6}>
        <img src={props.cricketerData.src} />
      </Col>
      <Modal isOpen={props.showCricketerInfoPanel} onRequestClose={props.onCricketerInfoDismissClick}>
        <div className="confirmation-overlay-block">
          <CricketerInfo
            cricketerData={props.cricketerData}
            onCricketerInfoDismissClick={props.onCricketerInfoDismissClick}
            onCricketerInfoSaveClick={props.onCricketerInfoSaveClick}
          />
        </div>
      </Modal>
    </div> : null }
    </Row>
    
  )
}

export default CricketerDetails
