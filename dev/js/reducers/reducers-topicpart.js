export default function (state=null, action) {
  switch(action.type)
  {
    case 'MODE_SELECTED':
      return null;
      break;
    case 'TOPIC_SELECTED':
      return action.payload
      break;
  }
  return state
}
