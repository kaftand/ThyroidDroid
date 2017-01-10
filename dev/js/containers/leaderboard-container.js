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
    return <Leaderboard />
  }
}

export default LeaderboardContainer
