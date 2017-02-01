export default function (state=null, action) {
  switch(action.type)
  {
    case 'GRADUATED_LIST_UPDATE':
      return action.payload;
      break;
  }
  return state
}
