import React, {Component} from 'react';

class Learn extends Component {
  constructor(props) {
    super(props)
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
          partlist.push(
            <li key={iTopicName+iPart} onClick={
              function() {
                topicSelector({
                  topicName:topicName,
                  part:iPart
                })
              }
            }
            >{iPart}</li>
          )
        }
        topicList.push(
          <ul key={iTopicName}>{topicName}{partlist}</ul>
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
