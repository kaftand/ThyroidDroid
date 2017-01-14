import React, {Component} from 'react';
import MultipleChoice from './multiple-choice'
import FillInBlank from './fill-in-blank'
import GradeSelf from './grade-self'
import CorrectAnswer from './correct-answer'
import IncorrectAnswer from './incorrect-answer'

class Question extends Component {
  constructor(props) {
    super(props)
  }
  determineQuestionType (question, onAnswer, lesson, lessonNumber) {
    if(question.multipleChoice)
    {
      return <MultipleChoice lesson={lesson} lessonNumber={lessonNumber} onAnswer={onAnswer}/>
    }
    if(question.fillInBlank)
    {
      return <FillInBlank lesson={lesson} lessonNumber={lessonNumber} onAnswer={onAnswer}/>
    }
    if(question.gradeSelf)
    {
      return <GradeSelf lesson={lesson} lessonNumber={lessonNumber} onAnswer={onAnswer}/>
    }
  }
  render ()
 {
   console.log(this.props.lesson)
   var miniLesson = this.props.lesson.miniLessons[this.props.quiz.lessonNumber];
   console.log('miniLesson', miniLesson)
   var question = miniLesson.question;
   if(!this.props.quiz.responded)
   {
     var answerContent = this.determineQuestionType(question, this.props.answeredQuiz, this.props.lesson, this.props.quiz.lessonNumber);
   }
   else if(this.props.quiz.correct)
   {
     var answerContent = <CorrectAnswer miniLessonText={miniLesson.text}/>
   }
   else
   {
     var answerContent = <IncorrectAnswer miniLessonText={miniLesson.text}  correctAnswer={question.correctAnswers[0]}/>
   }
   var questionText = question.questionText;
   return (
     <div>
       <div>
        {questionText}
       </div>
       <div>
        {answerContent}
       </div>
      </div>
   );
 }
}

export default Question
