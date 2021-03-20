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

const constructQuizContentDiv = () => {
  console.log("it works");
}

const populateQ1Information = () => {
  console.log("it works");
}

const destructStartScreenContentDiv = () => {
  console.log("it works");
}

const startTimer = () => {
  console.log("it works");
}


function startQuiz () {
  // create quizContent div
  const quizContentDiv = constructQuizContentDiv ();
  // fill div with question 1 info
  const q1Information = populateQ1Information ();
  //destruct startScreenContent div
  const startScreenContentDiv = destructStartScreenContentDiv ();
  // start timer
  const timer = startTimer ();
}

function q1ValuePopulator () {
  // populate new layout with question one info

}

function q1AnswerValidator () {
  //if button text matches correct answer go add points and go to next question

  //if wrong take away time and stay on page

}

document.getElementById("startButton").addEventListener("click", startQuiz);
