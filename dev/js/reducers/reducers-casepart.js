export default function (state=null, action) {
  switch(action.type)
  {
    case 'MODE_SELECTED':
      return null;
      break;
    case 'CASE_SELECTED':
      return action.payload
      break;
  }
  return state
}
