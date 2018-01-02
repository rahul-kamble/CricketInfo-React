/* global sessionStorage */
import React, {Component} from 'react'
import HeaderComponent from '../../components/Header'
import * as appActionCreator from '../../../common/actions/app.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <HeaderComponent />
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
