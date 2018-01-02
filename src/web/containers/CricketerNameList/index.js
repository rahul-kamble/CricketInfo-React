import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CricketerNameListComponent from '../../components/CricketerNameList'
import * as dashboardAction from '../../../common/actions/dashboard'

class CricketerNameList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  onCricketerNameSelect (event, cricketer) {
    this.props.dashboardAction.setCricketerData(cricketer)
  }

  render () {
    return (
      <CricketerNameListComponent allCricketerData={this.props.allCricketerData}
      onCricketerNameSelect={this.onCricketerNameSelect.bind(this)}/>
    )
  }
}

const mapStateToProps = (state) => ({
  allCricketerData: state.dashboard.allCricketerData
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardAction': bindActionCreators(dashboardAction, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CricketerNameList)
