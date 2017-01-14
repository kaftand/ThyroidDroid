import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startQuiz} from '../actions/index'
import Lesson from '../components/lesson'

class LessonContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Lesson lesson={this.props.lesson} startQuiz={this.props.startQuiz}/>
  }
}

function mapStateToProps(state) {
    return {
        lesson: state.lesson,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      startQuiz:startQuiz
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer)
