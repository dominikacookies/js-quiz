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

document.getElementById("startButton").addEventListener("click", startQuiz);

function startQuiz () {
  console.log("Hey")
  // remove id startContainer layout of html to include questions
  

  // start timer
}

function q1ValuePopulator () {
  // populate new layout with question one info

}

function q1AnswerValidator () {
  //if button text matches correct answer go add points and go to next question

  //if wrong take away time and stay on page

}
