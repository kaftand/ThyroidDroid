import React from 'react';
import GameMode from './game-mode';
import GameModeContainer from '../containers/game-mode-container';
import ContentPaneContainer from '../containers/content-pane-container';
import LoginContainer from '../containers/login-container';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <GameModeContainer />
        <ContentPaneContainer />
        <LoginContainer />
    </div>
);

export default App;
