import React, {Component} from 'react';
import LoginContainer from '../containers/login-container';

class LoggedInView extends Component
{
  constructor (props)
  {
    super(props)
  }
  render ()
  {
   return (
    <div>
      <LoginContainer />
    </div>)
  }

}

export default LoggedInView
