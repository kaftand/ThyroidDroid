import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Cases from '../components/cases'

class CasesContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Cases />
  }
}

export default CasesContainer
