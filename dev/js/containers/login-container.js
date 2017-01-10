import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authSignIn, authRegister} from '../actions/index'
import Login from '../components/login'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.error)
    {
      return <Login login={this.props.login} register={this.props.register} error={this.props.error.message}/>
    }
    else
    {
      return <Login login={this.props.login} register={this.props.register} />
    }
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login:authSignIn,
        register:authRegister
      }, dispatch)
}

function mapStateToProps(state) {
    return {
        error: state.loginError,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
