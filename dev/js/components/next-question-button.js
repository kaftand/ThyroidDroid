import React, {Component} from 'react';

class NextQuestionButton extends Component
{
  constructor (props)
  {
    super(props)
  }
  buttonCallback(setQuestionNumber, qNumber, number)
  {
    return function() {
      setQuestionNumber(qNumber, number)
    }
  }
  render ()
  {
    var callback = this.buttonCallback(this.props.setQuestionNumber, this.props.questionOrder[this.props.questionNumber + 1], this.props.questionNumber + 1);
   return (
    <button onClick={callback}>Next Question</button>)
  }

}

export default NextQuestionButton
