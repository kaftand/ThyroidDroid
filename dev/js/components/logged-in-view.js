import React, {Component} from 'react';
import GameModeContainer from '../containers/game-mode-container';
import ContentPaneContainer from '../containers/content-pane-container';
import LoginContainer from '../containers/login-container';
import LogOutContainer from '../containers/logout-container'
import {loggedInViewStyle} from '../styles'

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
      <LogOutContainer/>
      <div style={loggedInViewStyle} />
      <GameModeContainer />
      <ContentPaneContainer />
    </div>)
  }

}

export default LoggedInView
