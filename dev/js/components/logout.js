import React, {Component} from 'react';

class Logout extends Component {
  constructor(props) {
    super(props)
  }
  render ()
 {
   return <button type="button" className="btn btn-secondary" onClick={this.props.logOutFcn}>LOGOUT</button>
 }
}

export default Logout
