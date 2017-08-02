import React, {Component} from 'react';
var Parser = require('html-react-parser');

class IncorrectAnswer extends Component
{
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    var questionContent;
    if (this.props.isCase)
    {
      questionContent = <div/>;

    } else {
      questionContent = Parser(this.props.miniLessonText);
    }
    return (
      <div>
        <div>
          Nice Try! The correct answer was:
          {' ' + this.props.correctAnswer}
        </div>
        <div>
          {questionContent}
        </div>
      </div>
    )
  }

}

export default IncorrectAnswer
