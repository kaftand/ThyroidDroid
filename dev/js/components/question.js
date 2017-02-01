import React, {Component} from 'react';
import MultipleChoice from './multiple-choice'
import FillInBlank from './fill-in-blank'
import GradeSelf from './grade-self'
import CorrectAnswer from './correct-answer'
import IncorrectAnswer from './incorrect-answer'
import NextQuestionButtonContainer from '../containers/next-question-button-container'
import {questionStyles} from '../styles'

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
  createQuizAnswer (onAnswer, lesson, lessonNumber, username) {
    return function (correct) {
      onAnswer(correct, lessonNumber, lesson, username)
    }
  }
  render ()
 {
   var miniLesson = this.props.lesson.miniLessons[this.props.quiz.lessonNumber];
   var onAnswer = this.createQuizAnswer(
                                        this.props.answeredQuiz,
                                        this.props.lesson,
                                        this.props.quiz.lessonNumber,
                                        this.props.username)
   var question = miniLesson.question;
   if(!this.props.quiz.responded)
   {
     var answerContent = this.determineQuestionType(question, onAnswer, this.props.lesson, this.props.quiz.lessonNumber);
   }
   else if(this.props.quiz.correct)
   {
     var answerContent = (<div>
                            <CorrectAnswer miniLessonText={miniLesson.text}/>
                            <NextQuestionButtonContainer />
                          </div>)

   }
   else
   {
     var answerContent = (<div>
                            <IncorrectAnswer miniLessonText={miniLesson.text}  correctAnswer={question.correctAnswers[0]}/>
                            <NextQuestionButtonContainer />
                          </div>)
   }
   var questionText = question.questionText;
   return (
     <div>
       <div style={questionStyles.question}>
        {questionText}
       </div>
       <div style={questionStyles.answer}>
        {answerContent}
       </div>
      </div>
   );
 }
}

export default Question
