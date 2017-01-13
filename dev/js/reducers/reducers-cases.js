export default function (state=null, action) {
  switch(action.type)
  {
    case 'CASE_PULL':
      return action.payload;
      break;
  }
  return state
}
