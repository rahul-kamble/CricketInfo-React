import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CricketerInfoComponent from '../../components/CricketerInfo'
import * as dashboardAction from '../../../common/actions/dashboard'

class CricketerInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cricketerData:this.props.cricketerData
    }
    this.onCricketerInfoSaveClick = this.onCricketerInfoSaveClick.bind(this)
    this.onChangeField = this.onChangeField.bind(this)    
  }
  onChangeField = (inputName, value) => {
    let cricketerData = Object.assign({}, this.state.cricketerData);
    cricketerData[inputName] = value;
    this.setState({ cricketerData });
  }
  onCricketerInfoSaveClick() {
    this.props.dashboardAction.setUpdatedCricketerInfo(this.state.cricketerData)
    this.props.onCricketerInfoSaveClick()
  }

  render () {
    return (
      <CricketerInfoComponent cricketerData={this.state.cricketerData}
        onCricketerInfoDismissClick={this.props.onCricketerInfoDismissClick}
        onCricketerInfoSaveClick={this.onCricketerInfoSaveClick}
        onChangeField={this.onChangeField}/>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardAction': bindActionCreators(dashboardAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CricketerInfo)
