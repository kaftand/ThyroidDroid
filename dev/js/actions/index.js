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

export function trackGrad (username)
{
  firebase.database().ref().child('Questions').on('value', function(questionsSnapShot)
  {
    firebase.database().ref().child('Graduated').child(username).once('value', function(graduatedSnapShot)
    {
      var questions = questionsSnapShot.val();
      var graduated = graduatedSnapShot.val();
      for (var iTopic in questions)
      {
        if (questions.hasOwnProperty(iTopic))
        {
          var thisTopic = questions[iTopic];
          for (var iPart in thisTopic)
          {
            if (thisTopic.hasOwnProperty(iPart))
            {
              var thisPart = thisTopic[iPart];
              var iGraduated = true;
              if(!thisPart[username])
              {
                continue;
              }
              var userQuestion = thisPart[username].QuestionIDs
              for (var iQuestion = 0; iQuestion < userQuestion.length; iQuestion++)
              {
                iGraduated = iGraduated & (userQuestion[iQuestion].Correct>userQuestion[iQuestion].Incorrect);
              }
              if(iGraduated)
              {
                graduated[iTopic][iPart] = true;
              }
            }
          }
        }
      }
      firebase.database().ref().child('Graduated').child(username).update(graduated);
    })
  })
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

export function getGraduationList(username, topics)
{
  return dispatch => {
    firebase.database().ref().child("Graduated").child(username).on("value", snapshot => {
      dispatch({
        type:'GRADUATED_LIST_UPDATE',
        payload: snapshot.val()
      })
    })
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
              lesson.questionOrder = orderQuiz(lesson.miniLessons.length)
              console.log(lesson)
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


export function getTopics (username) {
  return dispatch => {
    dbref.child('Topics').child('Uterine Pathology').on( 'value' , topicSnap =>
    {
      firebase.database().ref().child("Graduated").child(username).on("value", snapshot => {
        var topics = topicSnap.val();
        var graduated = snapshot.val();
        if (!graduated)
        {
          graduated = new Object();
        }
        var topicsToPost = new Object();
        for(var iTopic = 0; iTopic < topics.length; iTopic++)
        {
          for (var topicName in topics[iTopic])
          {
            if (topics[iTopic].hasOwnProperty(topicName))
            {
              for (var partName in topics[iTopic][topicName])
              {
                if(!graduated[topicName])
                {
                  graduated[topicName] = new Object();
                  topicsToPost[topicName] = new Object();
                }
                var partNameDeblanked = partName.replace(' ','');
                if(typeof(graduated[topicName][partNameDeblanked]) == "undefined")
                {
                  if(!topicsToPost[topicName])
                  {
                    topicsToPost[topicName] = new Object();
                  }
                  graduated[topicName][partNameDeblanked] = false;
                  topicsToPost[topicName][partNameDeblanked] = false;
                }
                topics[iTopic][topicName][partName] = graduated[topicName][partNameDeblanked];
              }
            }
          }
        }
        if (!isEmpty(topicsToPost))
        {
          console.log(topicsToPost)
          firebase.database().ref().child("Graduated").child(username).update(topicsToPost);
        }
        dispatch({
          type:'TOPIC_PULL',
          payload: topics
        })
      })
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

export function orderQuiz (nQuestions) {
    var questionOrdered = [];
    for (var i = 0; i< nQuestions; i++)
    {
      questionOrdered.push(i);
    }
    var randomizedOrder = [];
    while(questionOrdered.length > 0)
    {
      var randomNum = Math.floor((Math.random() * questionOrdered.length ));
      randomizedOrder.push(questionOrdered.splice(randomNum,1)[0]);
    }
    return randomizedOrder
}

export function setQuestionNumber(qNumber, number) {
      return {
        type: 'NEXT_QUESTION',
        payload: {
          quiz:{
            correct:false,
            lessonNumber:qNumber,
            responded:false
          },
          number:number
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
      dbref.child('Questions').child(lesson.topic)
                              .child(lesson.part.replace(' ',''))
                              .once('value', function (snapshot) {
        var thisPart = snapshot.val();
        if(!thisPart[username])
        {
          var numQuestions = lesson.miniLessons.length;
          var QuestionIDs = [];
          thisPart[username] = new Object();
          for (var iQuestion = 0; iQuestion < numQuestions; iQuestion++)
          {
            QuestionIDs.push({
              Correct:0,
              Incorrect:0
            })
          }
          QuestionIDs[lessonNumber].Correct =+correct;
          QuestionIDs[lessonNumber].Incorrect =+(!correct);
          thisPart[username].QuestionIDs = QuestionIDs;
          dbref.child('Questions').child(lesson.topic)
                                  .child(lesson.part.replace(' ',''))
                                  .update(thisPart);
          return
        }
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
      })
    }
    dbref.child('users').child(username).child('totalScore').transaction(
      function (totalScore) {
        totalScore+= correct;
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

function isEmpty(obj) {
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key))
      {
        return false;
      }
    }
  return true;
}
