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
          Nice Job!
        </div>
        <div>
          {questionContent}
        </div>
      </div>
    )
  }

}

export default CorrectAnswer
