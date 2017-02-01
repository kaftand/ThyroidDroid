import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMode} from '../actions/index'
import Leaderboard from '../components/leaderboard'

class LeaderboardContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.leaders)
    return <Leaderboard leaders={this.props.leaders} user={this.props.user}/>
  }
}

function mapStateToProps(state) {
    return {
        leaders: state.leaders,
        user: state.user
    };
}
export default connect(mapStateToProps)(LeaderboardContainer)
