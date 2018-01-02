import React from 'react'
import { Row, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

const Login = props => {
  const onLoginClick = props.onLoginClick
  const onNameChange = props.onNameChange
  const onPasswordChange = props.onPasswordChange
  return (
        <Row>
          <Col md={6} className='login-block'>
            <ControlLabel>Enter Your Details</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Your Name here"
              onChange={onNameChange} />
            <FormControl
              type="text"
              placeholder="Enter Your Location here"
              onChange={onPasswordChange} />
            <Button bsSize="large" bsStyle="primary" onClick={onLoginClick}>Submit</Button>
          </Col>
        </Row>
    )
}
export default Login