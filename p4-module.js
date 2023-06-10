const { data } = require('./p4-data');

function getAnswers() {
  let arrayLength = data.length;
  let totalArray = [];
  for(let i = 0; i < (arrayLength); i++){
    let current = data[i].answer;
    totalArray.push(current);
  }
  return totalArray;
}

function getQuestions() {
  let arrayLength = data.length;
  let totalArray = [];
  for(let i = 0; i < (arrayLength); i++){
    let current = data[i].question;
    totalArray.push(current);
  }
  return totalArray;
}


function getQuestionsAnswers() {
  let arrayLength = data.length;
  let totalArray = [];
  for(let i = 0; i < (arrayLength); i++){
    let current = data[i];
    totalArray.push(current);
  }
  return totalArray;
}



function getQuestion(number = ""){
  let answerArray = getAnswers(data);
  let questionArray = getQuestions(data);
  let place = parseInt(number) - 1;
  let questionNum = parseInt(number);
    if (isNaN(questionNum) == true || place < 0) {
      return {
      question: questionArray[place],
      number: questionNum,
      error: 'Error'
    };
  };
    if (questionNum >= 4){
      return{
      question: questionArray[place],
      number: questionNum,
      error: 'Error'
    }
  }
      return{
      question: questionArray[place],
      number: questionNum,
      error: 'No Error'
  }
};

  function getAnswer(number = ""){
    let answerArray = getAnswers(data);
    let questionArray = getQuestions(data);
    let place = parseInt(number) - 1;
    let answerNum = parseInt(number);
      if (isNaN(answerNum) == true || place < 0){
        return {
        question: answerArray[place],
        number: answerNum,
        error: 'Error'
      }
    };
    if (answerNum >= 4){
      return{
      question: questionArray[place],
      number: answerNum,
      error: 'Error'
    }
  }
        return{
        question: answerArray[place],
        number: answerNum,
        error: 'No Error'
      }
      }

function getQuestionAnswer(number = ""){
    let answerArray = getAnswers(data);
    let questionArray = getQuestions(data);
    let place = parseInt(number) - 1;
    let answerNum = parseInt(number);
      if (isNaN(answerNum) == true || place < 0){
        return {
        question: questionArray[place],
        answer: answerArray[place],
        number: answerNum,
        error: 'Error.'
      }
      }
      if (answerNum >= 4){
        return{
        question: questionArray[place],
        number: answerNum,
        error: 'Error'
      }
    }
        return{
        question: questionArray[place],
        answer: answerArray[place],
        number: answerNum,
        error: 'No Error'
      }
      }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer

  };


/*
console.log(getQuestion(number = "1"));
console.log(getAnswer(number = "3"));
console.log(getQuestionAnswer(number = "3"));



console.log(getQuestions(data));
console.log(getAnswers(data));

console.log(getQuestionsAnswer(data));

*/

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = true;
const testGetAs = true;
const testGetQsAs = true;
const testGetQ = true;
const testGetA = true;
const testGetQA = true;
const testAdd = true;      // Extra credit
const testUpdate = true;   // Extra credit
const testDelete = true;   // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}
