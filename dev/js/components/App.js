import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GameMode from './game-mode';
import GameModeContainer from '../containers/game-mode-container';
import ContentPaneContainer from '../containers/content-pane-container';
import LoginContainer from '../containers/login-container';
import LogOutContainer from '../containers/logout-container'
import {authListen} from '../actions/index'

require('../../scss/style.scss');

class App extends Component {
  constructor (props)
  {
    super(props)
    this.props.authListen()
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({authListen:authListen}, dispatch)
}


export default connect(null, mapDispatchToProps)(App);
