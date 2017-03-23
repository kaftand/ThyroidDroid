import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{selectMode} from '../actions/index';
import BackToListButton from '../components/back-to-list-button'
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class BackToListButtonContainer extends Component {
    constructor(props) {
      super(props);
    }
    getListType(lesson)
    {
      if(lesson.topic === 'Cases')
      {
        return 'Cases'
      }
      else {
        return 'Learn'
      }
    }
    render() {
      return (<BackToListButton listType={this.getListType(this.props.lesson)}
              selectMode={this.props.selectMode} />)
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        lesson: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMode:selectMode}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BackToListButtonContainer);
