import React, {Component} from 'react';
import {fillInBlankStyles} from '../styles'

class FillInBlank extends Component
{
  constructor (props)
  {
    super(props)
    this.state = {
      responseText:''
    }
  }
  handleAnswerChange (event) {
    this.setState({responseText:event.target.value})
  }
  createGrader (onAnswer, correctAnswer, lesson, lessonNumber)
  {
    return (
        function () {
          var correct=false;
          var enteredAnswer = this.state.responseText;
          console.log('ce', correctAnswer);
          for(var iAnswer = 0; iAnswer < correctAnswer.length; iAnswer++)
          {
            console.log(enteredAnswer.toLowerCase(), correctAnswer[iAnswer].toLowerCase())
            correct = correct || (enteredAnswer.toLowerCase() === correctAnswer[iAnswer].toLowerCase());
          }
          onAnswer(correct);
      }).bind(this)

  }
  render ()
  {
    var miniLesson = this.props.lesson.miniLessons[this.props.lessonNumber];
    var question = miniLesson.question;
    return (
      <div style={fillInBlankStyles}>
        <input type='text' id='answer' placeholder='answer' onChange={this.handleAnswerChange.bind(this)}/>
        <button
          onClick={this.createGrader(this.props.onAnswer, question.correctAnswers, this.props.lesson, this.props.lessonNumber)}
          >Submit
        </button>

      </div>
    )
  }

}

export default FillInBlank
