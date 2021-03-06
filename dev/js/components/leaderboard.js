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
  render ()
 {
   var leaderElements = this.createLeaderElements(this.props.leaders);
   if (!this.props.user)
   {
     var yourScore = ''
   }
   else {
     var yourScore = this.props.user.totalScore;
   }
   return ( <div>
              <img style={leaderboardStyles.logo} src={'./ic_thyroidlogoBig.png'} />
              <ul style={leaderboardStyles.listContainer}>
                <h2 style={leaderboardStyles.header}>Top Scores</h2>
                {leaderElements}
                <li style={leaderboardStyles.yourScore}>
                  {'Your Score: ' + yourScore}
                </li>
              </ul>
            </div>
          )
 }
}

export default Leaderboard
