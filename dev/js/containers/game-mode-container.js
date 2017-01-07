import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class GameModeContainer extends Component {
    constructor(props) {
      if{!props.mode}
      {
        props.mode = 'leaderboard';
      }
      super(props);
    }
    render() {
      <GameMode mode={this.props.mode} />
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

export default connect(mapStateToProps)(GameModeContainer);
