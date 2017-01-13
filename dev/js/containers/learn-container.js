import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Learn from '../components/learn'

class LearnContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Learn />
  }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
    };
}

export default connect(mapStateToProps)(LearnContainer)
