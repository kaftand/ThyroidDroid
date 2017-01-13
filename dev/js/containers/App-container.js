import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';
import {authListen, getLeaders, getTopics, getCases, setLoading} from '../actions/index'



class AppContainer extends Component {
  constructor (props)
  {
    super(props)
    this.props.authListen()
    this.props.leaderListen()
    this.props.getTopics()
  }
  render ()
  {
    if (this.props.user)
    {
      this.props.getCases(this.props.user.username)
    }
    return <App user={this.props.user} loading={this.props.loading}/>
  }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      authListen:authListen,
      leaderListen:getLeaders,
      getTopics:getTopics,
      getCases:getCases,
      setLoading:setLoading
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    user:state.user,
    loading:state.loading
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
