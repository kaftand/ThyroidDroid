import * as firebase from 'firebase';


firebase.initializeApp({
  apiKey: "AIzaSyCo2EkqIecK5DFdiI1rVI2SAJT2EVxOpKU",                             // Auth / General Use
  authDomain: "uterine-pathology.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://uterine-pathology.firebaseio.com", // Realtime Database
  storageBucket: "uterine-pathology.appspot.com",          // Storage
});

const auth = firebase.auth();

export const authListen = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: 'AUTH_CHANGE',
        payload: user
      })
    })
  }
}

export function authSignIn (username, password) {
  if(!username)
  {
    username='';
  }
  if(!password)
  {
    password='';
  }
  return dispatch => auth.signInWithEmailAndPassword(username, password).catch(e => {
      dispatch({
        type:'LOGIN_ERROR',
        payload:e
      })
    })
}

export function authRegister (username, password) {
  if(!username)
  {
    username='';
  }
  if(!password)
  {
    password='';
  }
  return dispatch => auth.createUserWithEmailAndPassword(username, password).catch(e => {
      dispatch({
        type:'LOGIN_ERROR',
        payload:e
      })
    })
}


export const selectUser = (user) => {
    console.log('You clicked on user: ', user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectMode = (mode) => {
    console.log("You clicked on mode: ", mode);
    return {
        type: 'MODE_SELECTED',
        payload: mode
    }
};
