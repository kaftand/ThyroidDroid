import React, {Component} from 'react';
import LoggedInViewContainer from '../containers/logged-in-view-container'
import LoggedOutViewContainer from '../containers/logged-out-view-container'
import Loading from 'react-loader-advanced';
import {headerStyle} from '../styles'
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
      return (
            <div>
              <h2 style={headerStyle}>Thyroid Pathology</h2>
              <LoggedOutViewContainer />
            </div>)
    }
    else
    {
      return (<div>
              <h2 style={headerStyle}>Thyroid Pathology</h2>
                <Loading show={this.props.loading} message={'loading'}>
                  <LoggedInViewContainer user={this.props.user}/>
                </Loading>
              </div>)

    }
  }

}

export default App
