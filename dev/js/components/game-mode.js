import React, {Component} from 'react';


class GameMode extends Component {
  constructor(props) {
    super(props)
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
    var classNames = this.getClassNames(this.props.mode);
    return (
      <div>
        <a className={classNames.review} onClick={() => this.props.onSelectMode('review')}>Review</a>
        <a className={classNames.leaderboard} onClick={() => this.props.onSelectMode('leaderboard')}>Leadboard</a>
        <a className={classNames.subjects} onClick={() => this.props.onSelectMode('subjects')}>Subjects</a>
      </div>
    )
  }
}

export default GameMode
