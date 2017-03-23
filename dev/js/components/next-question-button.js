import React, {Component} from 'react';
import {endOfQuestionButtonStyles} from '../styles';

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
    if (this.props.questionNumber + 1 >= this.props.questionOrder.length)
    {
      var questionNumber = 0;
    }
    else {
      var questionNumber = this.props.questionNumber+1;
    }
    var callback = this.buttonCallback(this.props.setQuestionNumber, this.props.questionOrder[questionNumber], questionNumber);
   return (
    <button style={endOfQuestionButtonStyles} onClick={callback}>Next Question</button>)
  }

}

export default NextQuestionButton
