import React, {Component} from 'react';
import GameMode from './game-mode';
import GameModeContainer from '../containers/game-mode-container';
import ContentPaneContainer from '../containers/content-pane-container';
import LoginContainer from '../containers/login-container';
import LogOutContainer from '../containers/logout-container'
require('../../scss/style.scss');

class App extends Component {
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    return (
      <div>
        <h2>Thyroid</h2>
        <GameModeContainer />
        <LogOutContainer/>
        <ContentPaneContainer />
        <LoginContainer />
      </div>)
  }

}

export default App
