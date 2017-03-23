import React, {Component} from 'react';
import {endOfQuestionButtonStyles} from '../styles';

class BackToListButton extends Component
{
  constructor (props)
  {
    super(props)
  }
  buttonCallback(selectMode, listType)
  {

    return function() {
      selectMode(listType.toUpperCase())
    }
  }
  render ()
  {
    var callback = this.buttonCallback(this.props.selectMode, this.props.listType);
    return (
      <button style={endOfQuestionButtonStyles} onClick={callback}>{'Return to ' + this.props.listType}</button>)
  }

}

export default BackToListButton
