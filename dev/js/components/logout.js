import React, {Component} from 'react';
import {logoutStyle} from '../styles'

class Logout extends Component {
  constructor(props) {
    super(props)
  }
  render ()
 {
   return <button style={logoutStyle} type="button" onClick={this.props.logOutFcn}>LOGOUT</button>
 }
}

export default Logout
