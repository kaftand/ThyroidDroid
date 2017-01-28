import React, {Component} from 'react';
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
        {lessonText}
        <img src={this.props.lesson.pic}/>
        <button onClick={quizCallback}>Quiz</button>
      </div>
    )
  }
}

export default Lesson
