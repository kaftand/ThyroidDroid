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
