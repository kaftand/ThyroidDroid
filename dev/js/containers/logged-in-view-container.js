import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoggedInView from '../components/logged-in-view'

class LoggedInViewContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <LoggedInView />
  }
}

export default LoggedInViewContainer
