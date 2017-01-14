import React, {Component} from 'react';

class MultipleChoice extends Component
{
  constructor (props)
  {
    super(props)
  }
  answerCallback(correct, lessonNumber, lesson, onAnswer)
  {
    return function () {
      onAnswer(correct, lessonNumber, lesson)
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
          <button
          key={iAnswer}
          onClick={this.answerCallback(true, lessonNumber, lesson, onAnswer)}
          >{correctAnswer}
          </button>
        )
        increasingProbs = [-1, -1, -1, -1];
      }
      else
      {
        answerButtonArray.push(
          <button
          key={iAnswer}
          onClick={this.answerCallback(false, lessonNumber, lesson, onAnswer)}
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