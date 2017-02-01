import React, {Component} from 'react';
import {gameModeStyles} from '../styles'


class GameMode extends Component {
  constructor(props) {
    super(props)
  }
  getClassNames(mode) {
    switch(mode) {
      case 'LEARN':
        return {
          LEARN:gameModeStyles.selected,
          LEADERBOARD:gameModeStyles.unselected,
          CASES:gameModeStyles.unselected
        }
      case 'CASES':
        return {
          LEARN:gameModeStyles.unselected,
          LEADERBOARD:gameModeStyles.unselected,
          CASES:gameModeStyles.selected
        }
      case 'LEADERBOARD':
        return {
          LEARN:gameModeStyles.unselected,
          LEADERBOARD:gameModeStyles.selected,
          CASES:gameModeStyles.unselected
        }
      default:
        return {
          LEARN:gameModeStyles.unselected,
          LEADERBOARD:gameModeStyles.unselected,
          CASES:gameModeStyles.unselected
        }
      }
    }
  render() {

    var styles = this.getClassNames(this.props.mode);
    return (
      <div style={gameModeStyles.container}>
        <a href='#' style={styles.LEARN} onClick={() => this.props.onSelectMode('LEARN')}>LEARN </a>
        <a href='#' style={styles.LEADERBOARD} onClick={() => this.props.onSelectMode('LEADERBOARD')}>LEADERBOARD </a>
        <a href='#' style={styles.CASES} onClick={() => this.props.onSelectMode('CASES')}>CASES</a>
      </div>
    )
  }
}

export default GameMode
