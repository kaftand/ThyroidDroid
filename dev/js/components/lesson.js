import React, {Component} from 'react';
import {lessonPanelStyles} from '../styles'
var Parser = require('html-react-parser');

class Lesson extends Component {
  constructor (props) {
    super(props)
  }
  combineMiniLessons(lessons)
  {
    var questionText = []
    for (var i = 0; i<lessons.length; i++)
    {
      questionText.push(<div key={i}> {Parser(lessons[i].text)} </div>)
    }
    return questionText
  }
  createQuizOnClick (randNumber, startQuiz)
  {
    console.log('num', randNumber)
    return function () {
      startQuiz(randNumber)
    }
  }
  render ()
  {
    console.log('asdf ',this.props)
    var lessonText = this.combineMiniLessons(this.props.lesson.miniLessons);
    var randNumber = Math.floor((Math.random() * this.props.lesson.miniLessons.length));
    var quizCallback = this.createQuizOnClick (this.props.lesson.questionOrder[this.props.questionNumber], this.props.startQuiz);
    return (
      <div>
        <div style={lessonPanelStyles.text}>{lessonText}</div>
        <img style={lessonPanelStyles.picture} src={this.props.lesson.pic}/>
        <button style={lessonPanelStyles.quizButton} onClick={quizCallback}>Quiz</button>
      </div>
    )
  }
}

export default Lesson
