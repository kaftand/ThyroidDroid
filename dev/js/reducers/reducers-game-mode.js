export default function (state='leaderboard', action) {
  switch(action.type)
  {
    case 'MODE_SELECTED':
      return action.payload;
      break;
  }
  return state
}
