import React, {Component} from 'react';

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
    console.log(leaders.length)
    var leaderList = [];
    for(var key in leaders)
    {
      leaderList.unshift(<li key={leaderList.length}>
                          {leaders[key].username} {leaders[key].totalScore}
                          </li>)
    }
    console.log(leaderList)
    return leaderList
  }
  render ()
 {
   var leaderElements = this.createLeaderElements(this.props.leaders);
   return <ul>Top Scores {leaderElements}</ul>
 }
}

export default Leaderboard
