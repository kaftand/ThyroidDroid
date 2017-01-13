export default function (state=false, action) {
  switch(action.type)
  {
    case 'UPDATE_LOADING':
      return action.payload;
      break;
  }
  return state
}
