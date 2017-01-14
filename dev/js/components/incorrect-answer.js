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
          Nice Try! The correct answer was:
          {this.props.correctAnswer}
        </div>
        <div>
          {this.props.miniLessonText}
        </div>
      </div>
    )
  }

}

export default CorrectAnswer
