import React, {Component} from 'react';

class FillInBlank extends Component
{
  constructor (props)
  {
    super(props)
    state = {
      responseText:''
    }
  }
  handleAnswerChange (event) {
    this.setState({responseText:event.target.value})
  }
  createGrader (onAnswer, correctAnswer, lesson, lessonNumber)
  {
    return function (enteredAnswer) {
        correct=false;
        for(var iAnswer = 0; iAnswer < correctAnswer.length; iAnswer++)
        {
          correct = correct || (enteredAnswer.toLowerCase() === correctAnswer[iAnswer].toLowerCase());
        }
        onAnswer(correct, lesson, lessonNumber);
    }
  }
  render ()
  {
    var miniLesson = this.props.lesson.miniLesson[this.props.lessonNumber];
    var question = miniLesson.question;
    return (
      <div>
        <input type='text' id='answer' placeholder='answer' onChange={this.handleAnswerChange.bind(this)}/>
        <button
          onClick={createGrader(this.props.onAnswer, this.props.question.correctAnswers, this.props.lesson, this.props.lessonNumber)}
          >Submit
        </button>

      </div>
    )
  }

}

export default FillInBlank
