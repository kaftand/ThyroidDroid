import * as firebase from 'firebase';
import {parseUsername} from '../util'

var config = {
  apiKey: "AIzaSyCo2EkqIecK5DFdiI1rVI2SAJT2EVxOpKU",
  authDomain: "uterine-pathology.firebaseapp.com",
  databaseURL: "https://uterine-pathology.firebaseio.com",
  storageBucket: "uterine-pathology.appspot.com",
  messagingSenderId: "657975423881"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const ref = firebase.database().ref();

export const authListen = function () {

 //this listener will update state upon changes of auth status.

 return (dispatch, getState)=> {   //using a redux-thunk instead of normal action

   firebase.auth().onAuthStateChanged(function (user) {
         console.log(user);
         if(user)
         {
           user.username=parseUsername(user.email)
         }
         dispatch({type: 'AUTH_CHANGE', payload: user})
 });
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
  return dispatch => firebase.auth().signInWithEmailAndPassword(username, password).catch(e => {
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
  return dispatch => firebase.auth().createUserWithEmailAndPassword(username, password).catch(e => {
      dispatch({
        type:'LOGIN_ERROR',
        payload:e
      })
    })
}

export function getLeaders()
{
  return dispatch => {
    firebase.database().ref().child("users").orderByChild("totalScore").limitToLast(5).on('value', snapshot => {
      console.log('snapshot.val() ', snapshot.val())
      dispatch({
        type:'LEADER_UPDATE',
        payload: snapshot.val()
      });
    });
  }
}

export function authSignOut () {
  return dispatch => {
    console.log('hit signout')
    firebase.auth().signOut();
  }
}

export function getTopicsQuestionsAndScores () {
  return dispatch => {
    ref.child('Topics').child('Uterine Pathology').once( 'value' , function (topicSnap)
    {
      dispatch({
        type:'TOPIC_PULL',
        payload: topicSnap.val()
      });
    })
  }
}

export function selectTopic (topic) {
    return {
        type: 'TOPIC_SELECTED',
        payload: topic
    }
};

export const selectMode = (mode) => {
    return {
        type: 'MODE_SELECTED',
        payload: mode
    }
};
