export default function (state=null, action) {
  switch(action.type)
  {
    case 'AUTH_CHANGE':
      return action.payload;
      break;
  }
  return state
}
