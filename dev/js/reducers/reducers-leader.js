export default function (state=null, action) {
  switch(action.type)
  {
    case 'LEADER_UPDATE':
      return action.payload;
      break;
  }
  return state
}
