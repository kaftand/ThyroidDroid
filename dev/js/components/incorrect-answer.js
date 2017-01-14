import React, {Component} from 'react';
var Parser = require('html-react-parser');

class CorrectAnswer extends Component
{
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    return (
      <div>
        <div>
          Nice Try! The correct answer was:
          {this.props.correctAnswer}
        </div>
        <div>
          {Parser(this.props.miniLessonText)}
        </div>
      </div>
    )
  }

}

export default CorrectAnswer
