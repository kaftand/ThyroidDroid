import * as firebase from 'firebase';
import axios from 'axios';
import {parseUsername, extractLesson} from '../util'

var fbconfig = {
  apiKey: "AIzaSyCo2EkqIecK5DFdiI1rVI2SAJT2EVxOpKU",
  authDomain: "uterine-pathology.firebaseapp.com",
  databaseURL: "https://uterine-pathology.firebaseio.com",
  storageBucket: "uterine-pathology.appspot.com",
  messagingSenderId: "657975423881"
};
firebase.initializeApp(fbconfig);

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

export function loadLessons(topic, part) {
  return dispatch => {
    firebase.storage().ref().child('/' + topic + '/' + part + '.txt').getDownloadURL().then(
        function (url){
          console.log(url)
        //var instance = axios.create({
        //   baseURL: url,
        //   timeout: 1000,
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Credentials':'true',
        //     'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
        //     'Access-Control-Allow-Headers':'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        //   }
        // });
        // console.log(url);
        // instance.get(url).then(
        //   function (data) {
        //     console.log(data)
        //     var lesson = extractLesson(data)
        //     dispatch({
        //       type:'LESSON_LOAD',
        //       payload:lesson
        //     });
        //   }
        // );
        var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false ); // false for synchronous request
xmlHttp.send( null );
console.log( xmlHttp.responseText);
      }
    );
  }
}

export function getTopics () {
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

export function getCases (username) {
  return dispatch => {
    ref.child('Cases').child(username).on( 'value' , function (topicSnap)
    {
      dispatch({
        type:'CASE_PULL',
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

export function selectCase (topic) {
    return {
        type: 'CASE_SELECTED',
        payload: topic
    }
};

export function setLoading (onOrOff) {
    return {
        type: 'UPDATE_LOADING',
        payload: onOrOff
    }
};

export const selectMode = (mode) => {
    return {
        type: 'MODE_SELECTED',
        payload: mode
    }
};
