import React, {Component} from 'react';
import LoggedInViewContainer from '../containers/logged-in-view-container'
import LoggedOutViewContainer from '../containers/logged-out-view-container'
import Loading from 'react-loader-advanced';
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
      return (<Loading show={this.props.loading} message={'loading'}>
              <LoggedInViewContainer user={this.props.user}/>
              </Loading>)

    }
  }

}

export default App
