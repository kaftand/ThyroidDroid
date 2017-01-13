import React, {Component} from 'react';
import LeaderboardContainer from '../containers/leaderboard-container'
import LearnContainer from '../containers/learn-container'
import CasesContainer from '../containers/cases-container'

class ContentPane extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.mode === 'LEADERBOARD')
    {
      return <LeaderboardContainer />
    }
    else if (this.props.mode === 'LEARN')
    {
      return <LearnContainer />
    }
    else if (this.props.mode === 'CASES')
    {
      return <CasesContainer />
    }
  }
}

export default ContentPane
