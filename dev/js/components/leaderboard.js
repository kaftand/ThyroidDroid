import React, {Component} from 'react';
import {bubbleSortFTWFields} from '../util'
import {leaderboardStyles} from '../styles'

class Leaderboard extends Component {
  constructor(props) {
    super(props)
  }
  createLeaderElements (leaders)
  {
    if(!leaders)
    {
      return null
    }
    leaders = bubbleSortFTWFields(leaders, 'totalScore');
    var leaderList = [];
    for(var key in leaders)
    {
      leaderList.unshift(<li style={leaderboardStyles.listItem} key={leaderList.length}>
                          {leaders[key].username} {leaders[key].totalScore}
                          </li>)
    }
    return leaderList
  }
  getYourScore (leaders, username)
  {
    if(!leaders)
    {
      return '';
    }
    return leaders[username].totalScore.toString()
  }
  render ()
 {
   var leaderElements = this.createLeaderElements(this.props.leaders);
   var yourScore = this.getYourScore(this.props.leaders, this.props.username)
   return (
            <ul style={leaderboardStyles.listContainer}>
              <h2 style={leaderboardStyles.header}>Top Scores</h2>
              {leaderElements}
              <li style={leaderboardStyles.yourScore}>
                {'Your Score: ' + yourScore}
              </li>
            </ul>
          )
 }
}

export default Leaderboard
