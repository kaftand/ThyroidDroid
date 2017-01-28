import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setQuestionNumber} from '../actions/index'
import NextQuestionButton from '../components/next-question-button'
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class NextQuestionButtonContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (<NextQuestionButton questionNumber={this.props.questionNumber}
              questionOrder={this.props.lesson.questionOrder}
              setQuestionNumber={this.props.setQuestionNumber}/>)
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        questionNumber: state.questionNumber,
        lesson: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setQuestionNumber:setQuestionNumber}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionButtonContainer);
