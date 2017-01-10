import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authSignOut} from '../actions/index'
import Logout from '../components/logout'

class LogoutContainer extends Component {
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    return <Logout logOutFcn = {this.props.logOutFcn}/>
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logOutFcn:authSignOut,
      }, dispatch)
}


export default connect(null, mapDispatchToProps)(LogoutContainer);
