import React, {Component} from 'react';
import {loginStyles} from '../styles'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailBox:<input style={loginStyles.form} type='text' id='email' placeholder='email' onChange={this.handleEmailChange.bind(this)}/> ,
      passwordBox:<input style={loginStyles.form} type='password' id='password' placeholder='password' onChange={this.handlePasswordChange.bind(this)}/>,
      emailValue:'',
      passwordValue:''
    }
  }
  handleEmailChange (event) {
    this.setState({emailValue:event.target.value})
  }
  handlePasswordChange (event) {
    this.setState({passwordValue:event.target.value})
  }
  loginCallback ()
  {
    console.log(this.state.emailValue)
    this.props.login(this.state.emailValue,this.state.passwordValue)
  }
  registerCallback ()
  {
    this.props.register(this.state.emailValue,this.state.passwordValue)
  }
  render ()
 {
   if(!this.props.error)
   {
    return (
     <div>
      {this.state.emailBox}
      {this.state.passwordBox}
      <button type="button" style={loginStyles.SignIn} onClick={this.loginCallback.bind(this)}>SIGN IN</button>
      <button type="button" style={loginStyles.SignIn} onClick={this.registerCallback.bind(this)}>REGISTER</button>
     </div>
      )
    }
    else
    {
    return (
      <div>
       {this.state.emailBox}
       {this.state.passwordBox}
       <button type="button" style={loginStyles.SignIn}  className="btn btn-secondary" onClick={this.loginCallback.bind(this)}>SIGN IN</button>
       <button type="button" style={loginStyles.SignIn} className="btn btn-secondary" onClick={this.registerCallback.bind(this)}>REGISTER</button>
       <div style={loginStyles.error}>{this.props.error}</div>
      </div>
     )
   }
  }
}

export default Login
