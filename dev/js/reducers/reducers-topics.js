export default function (state=null, action) {
  switch(action.type)
  {
    case 'TOPIC_PULL':
      console.log('Topics',action.payload);
      return action.payload;
      break;
  }
  return state
}
