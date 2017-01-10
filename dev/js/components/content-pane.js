import React, {Component} from 'react';
import LeaderboardContainer from '../containers/leaderboard-container'
import LearnContainer from '../containers/learn-container'
import CasesContainer from '../containers/cases-container'

class ContentPane extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.mode === 'leaderboard')
    {
      return <LeaderboardContainer />
    }
    else if (this.props.mode === 'learn')
    {
      return <LearnContainer />
    }
    else if (this.props.mode === 'cases')
    {
      return <CasesContainer />
    }
  }
}

export default ContentPane
