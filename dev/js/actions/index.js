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
const dbref = firebase.database().ref();


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
    firebase.storage().ref().child('/' + topic + '/' + part.replace(' ','') + '.txt').getDownloadURL().then(
        function (url){
          console.log(url)
          var instance = axios.create({
            baseURL: url,
            timeout: 1000,
          });
          instance.get(url).then(
            function (data) {
              console.log(data)
              var lesson = extractLesson(data.data)
              lesson.topic = topic;
              lesson.part = part;
              firebase.storage().ref().child('/' + topic + '/' + part.replace(' ','') + '.png').getDownloadURL().then(
                function (picUrl)
                {
                  lesson.pic = picUrl;
                  dispatch({
                   type:'LESSON_LOAD',
                   payload:lesson
                 });
                },
                function (error)
                {
                  lesson.pic = null;
                  dispatch({
                   type:'LESSON_LOAD',
                   payload:lesson
                 });
                }
              );
           }
         );
      }
    );
  }
}


export function getTopics () {
  return dispatch => {
    dbref.child('Topics').child('Uterine Pathology').once( 'value' , function (topicSnap)
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
    dbref.child('Cases').child(username).on( 'value' , function (topicSnap)
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

export function startQuiz (lessonNumber) {
    return {
      type: 'QUIZ_STARTED',
      payload: {
        lessonNumber:lessonNumber,
        responded:false,
        correct:false
      }
    }
}

export function answeredQuiz (correct, lessonNumber, lesson, username) {
    if(lesson.topic === 'Cases')
    {
      if(correct)
      {
        var caseNumber = lesson.part.slice(5);
        dbref.child(lesson.topic).child(username).child(caseNumber).update({
          completed:true,
        })
      }
    }
    else
    {
      if(correct)
      {
        dbref.child('Questions').child(lesson.topic)
                                .child(lesson.part.replace(' ',''))
                                .child(username)
                                .child('QuestionIDs')
                                .child(lessonNumber.toString())
                                .child('Correct').transaction( function(correct) {
                                  correct++;
                                  return correct;
                                })
      }
      else
      {
        dbref.child('Questions').child(lesson.topic)
                                .child(lesson.part.replace(' ',''))
                                .child(username)
                                .child('QuestionIDs')
                                .child(lessonNumber.toString())
                                .child('Incorrect').transaction( function(Incorrect) {
                                  Incorrect++;
                                  return Incorrect;
                                })
      }
    }
    dbref.child('users').child(username).child('totalScore').transaction(
      function (totalScore) {
        totalScore++
        return totalScore
      });
    return {
      type: 'QUIZ_ANSWERED',
      payload: {
        lessonNumber:lessonNumber,
        responded:true,
        correct:correct
      }
    }
}
