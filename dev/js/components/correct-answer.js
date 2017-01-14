import React, {Component} from 'react';

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
          {this.props.miniLessonText}
        </div>
      </div>
    )
  }

}

export default CorrectAnswer
