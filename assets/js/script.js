let timeLeft = 91;
let score = 0;
const bodyElement = document.body ;

const question1 = {
  questionText: "This is the question",
  answerChoices: ["1", "2", "3", "4"],
  correctAnswer: function () {
    return this.answerChoices[3]
  }
};

console.log  (question1.correctAnswer())

const constructAnswerButtons = () => {
  const answerButton = document.createElement("button");
  console.log (answerButton)
  return answerButton;
}

const constructQuizContentDiv = () => {
  console.log("it works");
  // construct div
  const quizContentDiv = document.createElement("div");
  // add a class
  quizContentDiv.setAttribute("class", "quizContentt");
  // append it under the quiz content div
  document.getElementById("container").appendChild(quizContentDiv);
  // add h1
  const quizContentH1 = document.createElement("h1");
  //append under content div
  quizContentDiv.appendChild(quizContentH1);
  quizContentH1.textContent = question1.questionText ;
  // add buttons - why does this not work?
  //const answerButtons = question1.answerChoices.every(constructAnswerButtons);
  
  //console.log (answerButton);
  // add ids

  //append under content div
  //quizContentDiv.appendChild(answerButtons);

  // return entire div
  return quizContentH1;
  return quizContentDiv;
}

const destructStartScreenContentDiv = () => {
  console.log("it works");
}

const startTimer = () => {
  console.log("it works");
}


function startQuiz () {
  // create quizContent div
  const quizContentDivElement = constructQuizContentDiv ();
  //destruct startScreenContent div
  const startScreenContentDiv = destructStartScreenContentDiv ();
  // start timer
  const timer = startTimer ();
}

function q1AnswerValidator () {
  //if button text matches correct answer go add points and go to next question

  //if wrong take away time and stay on page

}

document.getElementById("startButton").addEventListener("click", startQuiz);
