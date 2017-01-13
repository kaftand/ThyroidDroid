import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Lesson from '../components/lesson'

class LessonContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Lesson lesson={this.props.lesson} />
  }
}

function mapStateToProps(state) {
    return {
        lesson: state.lesson,
    };
}


export default connect(mapStateToProps)(LessonContainer)
