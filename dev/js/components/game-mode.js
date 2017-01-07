import React, {Component} from 'react';
import {connect} from 'react-redux';


class GameMode extends Component {
  constructor(props) {
    super(props)
    var classNames = getClassNames(this.props.mode)
    this.states = classNames;
  }
  getClassNames(mode) {
    switch(mode) {
      case 'review':
        return {
          review:'selectedMode',
          leaderboard:'unSelectedMode',
          subjects:'unSelectedMode'
        }
      case 'subjects':
        return {
          review:'unSelectedMode',
          leaderboard:'unSelectedMode',
          subjects:'selectedMode'
        }
      default:
        return {
          review:'unSelectedMode',
          leaderboard:'selectedMode',
          subjects:'unSelectedMode'
        }
      }
    }
    render() {
      <div>
        <a className={this.states.review} onClick>Review</a>
        <a className={this.states.leaderboard}>Leadboard</a>
        <a className={this.states.subjects}>Subjects</a>
      </div>
    }
  }
}
