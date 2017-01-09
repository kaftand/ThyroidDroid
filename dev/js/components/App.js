import React from 'react';
import GameMode from './game-mode';
import GameModeContainer from '../containers/game-mode-container';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <GameModeContainer />
    </div>
);

export default App;
