export default function (state=null, action) {
  switch(action.type)
  {
    case 'QUIZ_ORDERED':
      return action.payload;
      break;
  }
  return state
}
