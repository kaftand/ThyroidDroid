export default function (state='LEADERBOARD', action) {
  switch(action.type)
  {
    case 'MODE_SELECTED':
      return action.payload;
      break;
    case 'LESSON_LOAD':
      return 'LESSON'
      break;
  }
  return state
}
