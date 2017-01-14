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
      questionText.push(Parser('<div key=' + i.toString() + '>' + lessons[i].text + '</div>'))
    }
    return questionText
  }
  createQuizOnClick (randNumber, startQuiz)
  {
    return function () {
      startQuiz(randNumber)
    }
  }
  render ()
  {

    var lessonText = this.combineMiniLessons(this.props.lesson.miniLessons);
    var randNumber = Math.floor((Math.random() * this.props.lesson.miniLessons.length));
    var quizCallback = this.createQuizOnClick (randNumber, this.props.startQuiz);
    return (
      <div>
        {lessonText}
        <button onClick={quizCallback}>Quiz</button>
      </div>
    )
  }
}

export default Lesson
