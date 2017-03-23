export default function (state=0, action) {
  switch(action.type)
  {
    case 'NEXT_QUESTION':
      return action.payload.number;
      break;
    case 'QUIZ_ORDERED':
      return 0;
      break;
    case 'MODE_SELECTED':
      return 0;
      break;
  }
  return state
}
