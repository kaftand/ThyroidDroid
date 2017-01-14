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
  createAnswer(correct, onAnswer) {
    return function () {
      onAnswer(correct)
    }
  }
  render ()
  {
    console.log(this.props)
    var miniLesson = this.props.lesson.miniLessons[this.props.lessonNumber];
    var question = miniLesson.question;

    if(this.state.showAnswer)
    {
      return (<div>
                <div>{question.correctAnswers[0]}</div>
                <button onClick={this.createAnswer(true, this.props.onAnswer)}>Knew It!</button>
                <button onClick={this.createAnswer(false, this.props.onAnswer)}>Try Again</button>
              </div>
              )
    }
    else
    {
      return <button onClick={this.showAnswer.bind(this)}>Show Answer</button>
    }

  }

}

export default GradeSelf
