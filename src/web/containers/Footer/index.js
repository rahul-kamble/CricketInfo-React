/* global sessionStorage */
import React, {Component} from 'react'
import FooterComponent from '../../components/Footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <FooterComponent />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
