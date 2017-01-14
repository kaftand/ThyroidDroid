import React, {Component} from 'react';

class GradeSelf extends Component
{
  constructor (props)
  {
    super(props)
    state = {
      showAnswer:false,
    }
  }
  render ()
  {
    if(this.state.showAnswer)
    {
      return <div>{this.props.correctAnswers[0]}</div>
    }
    else
    {
      return <button onClick={function() {
        this.state.showAnswer = true;
      }}>Show Answer</button>
    }

  }

}

export default GradeSelf
