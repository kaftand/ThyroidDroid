export default function (state=null, action) {
  switch(action.type)
  {
    case 'TOPIC_PULL':
      return action.payload;
      break;
  }
  return state
}
