import React, {Component} from 'react';
import {bubbleSortFTWFields} from '../util'

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
      leaderList.unshift(<li key={leaderList.length}>
                          {leaders[key].username} {leaders[key].totalScore}
                          </li>)
    }
    return leaderList
  }
  render ()
 {
   var leaderElements = this.createLeaderElements(this.props.leaders);
   return <ul>Top Scores {leaderElements}</ul>
 }
}

export default Leaderboard
