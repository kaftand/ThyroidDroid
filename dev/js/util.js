var MINILESSON_START = 'MINI_LESSON<'
var MINILESSON_END = 'MINI_LESSON/>'
var TEXT_START = 'TEXT<'
var QUESTION_START = 'QUESTION<'
var QUESTION_END = MINILESSON_END
var MULTIPLE_CHOICE_START = 'MULTIPLE_CHOICE<'
var GRADE_SELF_START = 'GRADE_SELF<'
var FILL_IN_BLANK_START = 'FILL_IN_BLANK<'
var COR_ANSWER_START = 'COR_ANSWER<'
var ALT_COR_ANSWER1_START = 'ALT_COR_ANSWER1<'
var ALT_COR_ANSWER2_START = 'ALT_COR_ANSWER2<'
var ALT_COR_ANSWER3_START = 'ALT_COR_ANSWER3<'
var INC_ANSWER1_START = 'INC_ANSWER1<'
var INC_ANSWER2_START = 'INC_ANSWER2<'
var INC_ANSWER3_START = 'INC_ANSWER3<'
var CAPTION_START = 'CAPTION<'



export function parseUsername(email) {
  var dotNotation = email.substring(0,email.indexOf("@"));
  return dotNotation.substring(0,dotNotation.indexOf('.'))+dotNotation.substring(dotNotation.indexOf('.')+1)
}

export function bubbleSortFTW(array, field) {
  while(true)
  {
    var sorted = 1;
    for (var i = 0; i < (array.length-1); i++) {
      if (array[i][field] > array[i+1][field])
      {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = 0;
      }
    }
    if (sorted)
    {
      return array;
    }
  }
}

export function bubbleSortFTWFields(objects, field) {
  var array = [];
  for( var i in objects)
  {
    array.push(objects[i]);
  }
  console.log(array)
  array = bubbleSortFTW(array, field);
  console.log('sorted array', array)
  return array;
}

export function extractLesson (wholeString) {
    var wholeStringNoEndLines = wholeString.replace(/(\r\n|\n|\r)/gm,"");
    var caption = extractFromBarrenTag(CAPTION_START, wholeStringNoEndLines);
    var miniLessons = extractMiniLessons(wholeStringNoEndLines);
    return {
      caption: caption,
      miniLessons: miniLessons
    }
}

export function extractMiniLessons (wholeString) {
  var minilessonsText = extractFromTags('MINI_LESSON<','END_MINI_LESSON/>', wholeString);
  console.log(minilessonsText)
  var miniLessons = [];
  console.log(typeof(wholeString))
  for (var iMiniLesson = 0; iMiniLesson < minilessonsText.length; iMiniLesson++)
  {
    console.log('in loop', minilessonsText[iMiniLesson])
    var text = extractFromBarrenTag(TEXT_START, minilessonsText[iMiniLesson]);
    var question = extractFromFertileTag(QUESTION_START, minilessonsText[iMiniLesson]);
    console.log(question)
    var questionText = extractFromBarrenTag('', minilessonsText[iMiniLesson]);
    console.log(questionText)
    var multipleChoice = extractFromBarrenTag(MULTIPLE_CHOICE_START, question) === 'y';
    var gradeSelf = extractFromBarrenTag(GRADE_SELF_START, question) === 'y';
    var fillInBlank = extractFromBarrenTag(FILL_IN_BLANK_START, question) === 'y';
    var correctAnswer = extractFromBarrenTag(COR_ANSWER_START, question);
    var altCorrectAnswer1 = extractFromBarrenTag(ALT_COR_ANSWER1_START, question);
    var altCorrectAnswer2 = extractFromBarrenTag(ALT_COR_ANSWER2_START, question);
    var incorrectAnswer1 = extractFromBarrenTag(INC_ANSWER1_START, question);
    var incorrectAnswer2 = extractFromBarrenTag(INC_ANSWER2_START, question);
    var incorrectAnswer3 = extractFromBarrenTag(INC_ANSWER3_START, question);
    miniLessons.push(
      {
        text:text,
        question:{
          questionText:questionText,
          multipleChoice:multipleChoice,
          gradeSelf:gradeSelf,
          fillInBlank:fillInBlank,
          correctAnswers:[
            correctAnswer,
            altCorrectAnswer1,
            altCorrectAnswer2
          ],
          incorrectAnswers:[
            incorrectAnswer1,
            incorrectAnswer2,
            incorrectAnswer3
          ]
        }
      }
    );
  }
  return miniLessons;
}

export function extractFromTags (startTag, endTag, a) {
  console.log('asdf')
  var result = [], m, rx = new RegExp(startTag + '(.*?)' + endTag,'g');
  while ((m=rx.exec(a)) !== null) {
    result.push(m[1]);
  }
  return result
}

export function extractFromBarrenTag(startTag, a) {
  var barrenString = a.match(startTag + '(.*?)/>');
  if(barrenString)
  {
  return barrenString[1];
  }
  else
  {
    return null;
  }
}

export function extractFromFertileTag(startTag, a) {
  var fertileString = a.match(startTag + '(.*)/>');
  if (fertileString)
  {
  return fertileString[1];
  }
  else
  {
    return null
  }
}
