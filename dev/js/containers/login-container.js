import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authSignIn, authRegister} from '../actions/index'
import Login from '../components/login'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.login)
    console.log(this.props.register)
  }
  render() {
    return <Login login={this.props.login} register={this.props.register}/>
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
        error: state.errorLogin
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
