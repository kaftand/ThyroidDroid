import React, {Component} from 'react';
import {multipleChoiceStyles} from '../styles'

class MultipleChoice extends Component
{
  constructor (props)
  {
    super(props)
  }
  answerCallback(correct, onAnswer)
  {
    return function () {
      onAnswer(correct)
    }
  }
  randomizeAnswerOrder (lesson, lessonNumber, onAnswer)
  {
    var question = lesson.miniLessons[lessonNumber].question;
    var correctAnswer = question.correctAnswers[0];
    var incorrectAnswers = question.incorrectAnswers;
    var answerButtonArray = [];
    var increasingProbs = [0.25, 0.3333, .5, 1.1]
    var iIncorrectAnswer = 0;
    for (var iAnswer = 0; iAnswer < incorrectAnswers.length+1; iAnswer++)
    {
      if(Math.random() < increasingProbs[iAnswer])
      {
        answerButtonArray.push(
          <button style={multipleChoiceStyles}
          key={iAnswer}
          onClick={this.answerCallback(true,  onAnswer)}
          >{correctAnswer}
          </button>
        )
        increasingProbs = [-1, -1, -1, -1];
      }
      else
      {
        answerButtonArray.push(
          <button style={multipleChoiceStyles}
          key={iAnswer}
          onClick={this.answerCallback(false, onAnswer)}
          >{incorrectAnswers[iIncorrectAnswer]}
          </button>
        );
        iIncorrectAnswer++;
      }
    }
    return answerButtonArray
  }
  render ()
  {
    var answerButtons = this.randomizeAnswerOrder(this.props.lesson,
                                                  this.props.lessonNumber,
                                                  this.props.onAnswer);
    return <div>{answerButtons}</div>
  }

}

export default MultipleChoice
