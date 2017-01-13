import React, {Component} from 'react';

class Lesson extends Component {
  constructor (props) {
    super(props)
  }
  combineMiniLessons(lessons)
  {
    var questionText = []
    for (var i = 0; i<lessons.length; i++)
    {
      questionText.push(<div key={i}>{lessons[i].text}</div>)
    }
    return questionText
  }
  render ()
  {
    var lessonText = this.combineMiniLessons(this.props.lesson.miniLessons);
    return (
      <div>
        {lessonText}
        <button>Quiz</button>
      </div>
    )
  }
}

export default Lesson
