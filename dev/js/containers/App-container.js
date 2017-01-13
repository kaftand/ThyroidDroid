import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';
import {authListen, getLeaders, getTopicsQuestionsAndScores} from '../actions/index'



class AppContainer extends Component {
  constructor (props)
  {
    super(props)
    this.props.authListen()
    this.props.leaderListen()
    this.props.getTopicsQuestionsAndScores()
  }
  render ()
  {
    return <App user={this.props.user}/>
  }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      authListen:authListen,
      leaderListen:getLeaders,
      getTopicsQuestionsAndScores:getTopicsQuestionsAndScores
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    user:state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
