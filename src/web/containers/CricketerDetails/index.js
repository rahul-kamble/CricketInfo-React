import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CricketerDetailsComponent from '../../components/CricketerDetails'

class CricketerDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCricketerInfoPanel: false
    }
    this.onEditDetailsClick = this.onEditDetailsClick.bind(this)
  }
  onCricketerInfoDismissClick (){
    this.setState({
      showCricketerInfoPanel: false
    })
  }
  onEditDetailsClick () {
    this.setState({
      showCricketerInfoPanel: true
    })
  }
  onCricketerInfoSaveClick () {
    this.setState({
      showCricketerInfoPanel: false
    })
  }
  
  render () {
    return (
      <CricketerDetailsComponent 
        cricketerData={this.props.cricketerData}
        showCricketerInfoPanel={this.state.showCricketerInfoPanel}
        onCricketerInfoDismissClick={this.onCricketerInfoDismissClick.bind(this)}
        onCricketerInfoSaveClick={this.onCricketerInfoSaveClick.bind(this)}
        onEditDetailsClick={this.onEditDetailsClick} />
    )
  }
}

const mapStateToProps = (state) => ({
  cricketerData: state.dashboard.cricketerData
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(CricketerDetails)
