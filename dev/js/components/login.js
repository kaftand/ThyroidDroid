import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailBox:<input type='text' name='email' placeholder='email'/> ,
      passwordBox:<input type='password' name='email' placeholder='password'/>

    }
  }
  loginCallback ()
  {
    this.props.login(this.state.emailBox.value,this.state.passwordBox.value)
  }
  registerCallback ()
  {
    this.props.register(this.state.emailBox.value,this.state.passwordBox.value)
  }
  render ()
 {
   if(!this.props.error)
    return (
     <div>
      {this.state.emailBox}
      {this.state.passwordBox}
      <button type="button" className="btn btn-secondary" onClick={this.loginCallback.bind(this)}>SIGN IN</button>
      <button type="button" className="btn btn-secondary" onClick={this.registerCallback.bind(this)}>REGISTER</button>
     </div>
    )
   else
     return (
      <div>
       {this.state.emailBox}
       {this.state.passwordBox}
       <button type="button" className="btn btn-secondary" onClick={this.loginCallback}>SIGN IN</button>
       <button type="button" className="btn btn-secondary" onClick={this.registerCallback}>REGISTER</button>
       <div>{this.props.error}</div>
      </div>
     )

 }
}

export default Login
