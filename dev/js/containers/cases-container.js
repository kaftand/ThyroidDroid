import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadLessons} from '../actions/index';
import Cases from '../components/cases'

class CasesContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Cases cases={this.props.cases} selectCase={this.props.selectCase}/>
  }
}

function mapStateToProps(state) {
    return {
        cases: state.cases,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectCase:loadLessons}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CasesContainer)
