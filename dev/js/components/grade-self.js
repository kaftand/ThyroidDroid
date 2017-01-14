import React, {Component} from 'react';

class GradeSelf extends Component
{
  constructor (props)
  {
    super(props)
    this.state = {
      showAnswer:false,
    }
  }
  showAnswer() {
    this.state.showAnswer = true;
    this.forceUpdate()
  }
  render ()
  {
    console.log(this.props)
    var miniLesson = this.props.lesson.miniLessons[this.props.lessonNumber];
    var question = miniLesson.question;

    if(this.state.showAnswer)
    {
      return <div>{question.correctAnswers[0]}</div>
    }
    else
    {
      return <button onClick={this.showAnswer.bind(this)}>Show Answer</button>
    }

  }

}

export default GradeSelf
