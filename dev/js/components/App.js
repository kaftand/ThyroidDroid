import React, {Component} from 'react';
import LoggedInViewContainer from '../containers/logged-in-view-container'
import LoggedOutViewContainer from '../containers/logged-out-view-container'
require('../../scss/style.scss');

class App extends Component {
  constructor (props)
  {
    super(props)
  }
  render ()
  {
    if (!this.props.user)
    {
      return (<LoggedOutViewContainer />)
    }
    else
    {
      return (<LoggedInViewContainer user={this.props.user}/>)
    }
  }

}

export default App
