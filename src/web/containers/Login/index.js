/* global FileReader */
import React, { Component } from 'react'
import LoginComponent from '../../components/Login'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActionCreator from '../../../common/actions/login.js'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLoginClick = this.onLoginClick.bind(this)
  }
  onNameChange (event) {
    this.setState({name: event.target.value})
  }
  onPasswordChange (event) {
    this.setState({password: event.target.value })
  }
  onLoginClick () {
    this.props.authActions.login(this.state.name, this.state.password)
  }
  render () {
    return (
      <LoginComponent  onLoginClick={this.onLoginClick}
      onNameChange={this.onNameChange}
      onPasswordChange={this.onPasswordChange}/>
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'authActions': bindActionCreators(authActionCreator, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
