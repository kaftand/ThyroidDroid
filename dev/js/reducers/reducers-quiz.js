export default function (state=null, action) {
  switch(action.type)
  {
    case 'QUIZ_STARTED':
      return action.payload;
      break;
    case 'QUIZ_ANSWERED':
      return action.payload;
      break;
    case 'MODE_SELECTED':
      return null;
      break;
    case 'NEXT_QUESTION':
      return action.payload.quiz;
      break;
  }
  return state
}
