import React, {Component} from 'react';
import {caseStyles} from '../styles';

class Cases extends Component {
  constructor(props) {
    super(props)
  }
  createClickFunction (name, caseSelector) {
    return function () {
      console.log(name)
      caseSelector('Cases', name)
    }
  }
  buildCaseList (cases, caseSelector) {
    var caseList = [];
    var functionList = [];
    for(var iCase = 0; iCase < cases.length; iCase++)
    {
      var thisCase = cases[iCase];
      var name = thisCase.caseName;
      functionList.push(
        this.createClickFunction(name, caseSelector)
      )
      if (thisCase.completed)
      {
        var thisStyle = caseStyles.graduated;
      } else {
        var thisStyle = caseStyles.notGraduated;
      }
      caseList.push(
        <div key={iCase}>
          <li style={thisStyle} key={iCase} onClick={
            functionList[iCase]
          }
          >{name}</li>
        </div>
      )
    }
    return caseList;
  }
  render ()
  {
  if(this.props.cases)
  {
    var caseList = this.buildCaseList(this.props.cases, this.props.selectCase)
  }
  else
  {
    var caseList = <div>Loading...</div>
  }
   return <ul style={caseStyles.container}>{caseList}</ul>
  }
}

export default Cases
