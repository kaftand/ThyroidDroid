import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMode} from '../actions/index'
import ContentPane from '../components/content-pane'

class ContentPaneContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <ContentPane mode={this.props.mode}/>
  }
}

function mapStateToProps(state)
{
  return {
    mode:state.mode
  }
}

export default connect (mapStateToProps)(ContentPaneContainer)
