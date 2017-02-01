import React, {Component} from 'react';
import {lessonStyles} from '../styles';

class Learn extends Component {
  constructor(props) {
    super(props)
  }
  createClickFunction (topic, name, topicSelector) {
    return function () {
      topicSelector(topic, name.replace(' ', ''))
    }
  }
  buildTopicList (firebaseTopics, topicSelector) {
    var topicList = [];
    for(var iTopic = 0; iTopic < firebaseTopics.length; iTopic++)
    {
      var thisTopic = firebaseTopics[iTopic];
      for (var iTopicName in thisTopic)
      {
        var topicName = iTopicName;
        var partlist = [];
        for (var iPart in thisTopic[iTopicName])
        {
          if(thisTopic[iTopicName][iPart])
          {
            var thisPartStyle = lessonStyles.graduated;
          } else {
            var thisPartStyle = lessonStyles.notGraduated;
          }
          partlist.push(
            <li style={thisPartStyle} key={iTopicName+iPart} onClick={
              this.createClickFunction(topicName, iPart, topicSelector)
            }
            >{iPart}</li>
          )
        }
        topicList.push(
          <div key={iTopicName}>
            <h2 style={lessonStyles.header}>{topicName}</h2>
            <ul style={lessonStyles.container}>{partlist}</ul>
          </div>
        )
      }
    }
    return topicList;
  }
  render ()
 {
   if(this.props.topics)
   {
     var topicList = this.buildTopicList(this.props.topics, this.props.selectTopic);
   }
   else
   {
     var topicList = 'Loading...'
   }
   return <div>{topicList}</div>
 }
}

export default Learn
