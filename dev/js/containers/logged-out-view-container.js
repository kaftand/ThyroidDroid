import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoggedOutView from '../components/logged-out-view'

class LoggedOutViewContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <LoggedOutView />
  }
}

export default LoggedOutViewContainer
