import React, {Component} from 'react';
import LeaderboardContainer from '../containers/leaderboard-container'

class ContentPane extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <LeaderboardContainer />
  }
}

export default ContentPane
