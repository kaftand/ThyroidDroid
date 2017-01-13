import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadLessons} from '../actions/index'
import Learn from '../components/learn'

class LearnContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Learn topics={this.props.topics} selectTopic={this.props.selectTopic}/>
  }
}

function mapStateToProps(state) {
    return {
        topics: state.topics,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectTopic:loadLessons}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnContainer)
