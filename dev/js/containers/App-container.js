import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../components/App';
import {authListen, getLeaders, getTopics, getCases, setLoading, getGraduationList, trackGrad} from '../actions/index'



class AppContainer extends Component {
  constructor (props)
  {
    super(props)
    this.props.authListen()
    this.props.leaderListen()

  }
  render ()
  {
    if (this.props.user)
    {
      this.props.getTopics(this.props.user.username)
      this.props.getCases(this.props.user.username)
      trackGrad(this.props.user.username)
      if (this.props.topics)
      {
        //this.props.getGraduationList(this.props.user.username, this.props.topics)
      }
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
      setLoading:setLoading,
      getGraduationList:getGraduationList
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    user:state.user,
    loading:state.loading,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
