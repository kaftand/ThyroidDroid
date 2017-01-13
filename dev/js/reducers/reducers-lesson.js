export default function (state=null, action) {
  switch(action.type)
  {
    case 'LESSON_LOAD':
      return action.payload;
      break;
  }
  return state
}
