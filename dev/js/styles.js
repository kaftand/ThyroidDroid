const UNMCRed =  '#ad122a';
const UNMCWhite =  '#ffffff';
const UNMCGreen =  '#a1b426';

export const headerStyle = {
  width:'100%',
  color:UNMCWhite,
  background: UNMCRed,
  fontSize: 'auto'
}

export const loginStyles = {
  form:{
    display:'block',
    margin: 'auto',
    fontSize: 'auto'
  },
  SignIn:{
    display:'block',
    margin: 'auto'
  },
  error:{
    color:UNMCGreen,
    textAlign:'center'
  }
}

export const gameModeStyles = {
  selected:{
    color:'black',
    display:'table-cell',
    textDecoration: 'none',
    textAlign:'center',
    borderBottom: 'medium solid' + UNMCGreen,
  },
  unselected:{
    color:'grey',
    display:'table-cell',
    textDecoration: 'none',
    textAlign:'center'
  },
  container:{
    width:'100%',
    display: 'table',
    margin: 'auto',
  }
}

export const leaderboardStyles = {
  listContainer:{
    display:'block',
    margin: 'auto',
    fontSize: 'auto',
    color: 'black',
    textAlign:'center',
    padding:0
  },
  listItem:{
    listStyleType: 'none',
    color: UNMCRed
  },
  yourScore:{
    listStyleType: 'none',
    color: 'black'
  },
  header:{
    color: 'black'
  },
  logo:{
    display: 'block',
    margin: 'auto',
  }
}


export const lessonStyles = {
    header: {
      color:'grey',
      textAlign:'center'
    },
    container:
    {
      padding: 0,
      textAlign:'center'
    },
    graduated:
    {
      listStyleType: 'none',
      display: 'inline-block',
      padding: '10px',
      border: '2px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer',
      color: UNMCWhite,
      background:UNMCRed
    },
    notGraduated:{
      listStyleType: 'none',
      display: 'inline-block',
      padding: '10px',
      border: '2px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer',
      color: UNMCWhite,
      background:'lightgrey'
    }
}

export const caseStyles = {
  graduated:
  {
    listStyleType: 'none',
    display: 'table',
    padding: '10px',
    border: '2px',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',
    color: UNMCWhite,
    background:UNMCRed
  },
  notGraduated:{
    listStyleType: 'none',
    display: 'inline-block',
    padding: '10px',
    border: '2px',
    borderRadius: '5px',
    margin: '5px',
    cursor: 'pointer',
    color: UNMCWhite,
    background:'lightgrey'
  },
  container:{
    textAlign:'center'
  }
}

export const lessonPanelStyles = {
  text:{
    paddingTop:"20px",
    paddingBottom:"20px"
  },
  picture:{
    display: 'block',
    margin: 'auto',
  },
  quizButton:{
    display:'block',
    width:'100%'
  }
}

export const multipleChoiceStyles = {
    display: 'block',
    margin: 'auto',
    padding: '10px',
    border: '2px',
    borderRadius: '5px',
    margin: '5px',
    width:'100%'
}

export const fillInBlankStyles = {
  display: 'block',
  margin: 'auto',
  textAlign:'center'
}

export const questionStyles = {
  question:{
    paddingTop:'20px',
    paddingBottom:'20px',
    textAlign:'center'
  },
  answer:{

  }
}
