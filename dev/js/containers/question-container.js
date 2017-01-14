import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Question from '../components/question'
import {answeredQuiz} from '../actions/index'

class QuestionContainer extends Component {
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    return <Question
            quiz = {this.props.quiz}
            lesson = {this.props.lesson}
            answeredQuiz = {this.props.answeredQuiz}
            />
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        answeredQuiz:answeredQuiz,
      }, dispatch)
}

function mapStateToProps (state) {
    return {
      lesson:state.lesson,
      quiz:state.quiz,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
