/* global sessionStorage */
import React, { Component } from 'react'
import Login from '../Login'
import Header from '../Header'
import Footer from '../Footer'
import Dashboard from '../Dashboard'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../../../common/route/history'

class AppContainer extends Component {
  render () {
    return (
        <div>
          <Header />
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/Dashboard' component={Dashboard} />
            </Switch>
          </Router>
        </div>
      )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
