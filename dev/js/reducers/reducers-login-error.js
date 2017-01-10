export default function (state=null, action) {
  switch(action.type)
  {
    case 'LOGIN_ERROR':
      return action.payload;
      break;
    case 'AUTH_CHANGE':
      return null;
      break;
  }
  return state
}
