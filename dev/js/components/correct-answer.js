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
          Nice Job!
        </div>
        <div>
          {Parser(this.props.miniLessonText)}
        </div>
      </div>
    )
  }

}

export default CorrectAnswer
