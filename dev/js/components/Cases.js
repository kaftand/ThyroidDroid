import React, {Component} from 'react';

class Cases extends Component {
  constructor(props) {
    super(props)
  }
  createClickFunction (name, caseSelector) {
    return function () {
      console.log(name)
      caseSelector('Cases', name.replace(' ', ''))
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
      caseList.push(
        <li key={iCase} onClick={
          functionList[iCase]
        }
        >{name}</li>
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
    caseList = <div>Loading...</div>
  }
   return <ul>{caseList}</ul>
  }
}

export default Cases
