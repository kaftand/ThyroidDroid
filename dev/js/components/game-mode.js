import React, {Component} from 'react';


class GameMode extends Component {
  constructor(props) {
    super(props)
  }
  getClassNames(mode) {
    switch(mode) {
      case 'LEARN':
        return {
          LEARN:'selectedMode',
          LEADERBOARD:'unSelectedMode',
          CASES:'unSelectedMode'
        }
      case 'CASES':
        return {
          LEARN:'unSelectedMode',
          LEADERBOARD:'unSelectedMode',
          CASES:'selectedMode'
        }
      case 'LEADERBOARD':
        return {
          LEARN:'unSelectedMode',
          LEADERBOARD:'selectedMode',
          CASES:'unSelectedMode'
        }
      default:
        return {
          LEARN:'unSelectedMode',
          LEADERBOARD:'unSelectedMode',
          CASES:'unSelectedMode'
        }
      }
    }
  render() {

    var classNames = this.getClassNames(this.props.mode);
    return (
      <div>
        <a className={classNames.LEARN} onClick={() => this.props.onSelectMode('LEARN')}>LEARN </a>
        <a className={classNames.LEADERBOARD} onClick={() => this.props.onSelectMode('LEADERBOARD')}>LEADERBOARD </a>
        <a className={classNames.CASES} onClick={() => this.props.onSelectMode('CASES')}>CASES</a>
      </div>
    )
  }
}

export default GameMode
