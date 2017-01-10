import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMode} from '../actions/index'
import GameMode from '../components/game-mode'
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class GameModeContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<GameMode mode={this.props.mode} onSelectMode={this.props.selectMode}/>)
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMode:selectMode}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameModeContainer);
