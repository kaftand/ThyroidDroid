import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';
import {authListen, getLeaders} from '../actions/index'


class AppContainer extends Component {
  constructor (props)
  {
    super(props)
    this.props.authListen()
    this.props.leaderListen()
  }
  render ()
  {
    return <App user={this.props.user}/>
  }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      authListen:authListen,
      leaderListen:getLeaders
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    user:state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
