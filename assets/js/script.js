let timeLeft = 3;
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

const constructAnswerButtons = (quizContentDiv) => {
  const answerButton = document.createElement("button");
  console.log (answerButton)
  return answerButton;
}

const constructQuizContentDiv = () => {
  console.log("it works");
  // construct div
  const quizContentDiv = document.createElement("div");
  // add a class
  quizContentDiv.setAttribute("class", "quizContent");
  // append it under the quiz content div
  document.getElementById("container").appendChild(quizContentDiv);
  // add h1
  const quizContentH1 = document.createElement("h1");
  //append under content div
  quizContentDiv.appendChild(quizContentH1);
  quizContentH1.textContent = question1.questionText;

  // add buttons, ids and append under content div
  const button1 = document.createElement("button");
  button1.setAttribute("id", "#1");
  button1.textContent = question1.answerChoices[0];
  quizContentDiv.appendChild(button1);

  const button2 = document.createElement("button");
  button2.setAttribute("id", "#2");
  button2.textContent = question1.answerChoices[1];
  quizContentDiv.appendChild(button2);

  const button3 = document.createElement("button");
  button3.setAttribute("id", "#3");
  button3.textContent = question1.answerChoices[2];
  quizContentDiv.appendChild(button3);

  const button4 = document.createElement("button");
  button4.setAttribute("id", "#4");
  button4.textContent = question1.answerChoices[3];
  quizContentDiv.appendChild(button4);
  
  // return entire div
  return quizContentDiv;
}

const destructStartScreenContentDiv = () => {
  startScreenDiv = document.getElementById("startScreenContent");
  startScreenDiv.remove();
}



const startTimer = () => {
  const timerTick = () => {
    timeLeft -= 1;
    document.getElementById("time").textContent = timeLeft;
  }

  const timer = setInterval(timerTick, 1000);

  if (timeLeft < 0) {
    clearInterval(timer);
    console.log("end");
  }
}



function startQuiz () {
  // create quizContent div
  constructQuizContentDiv ();
  //destruct startScreenContent div
  destructStartScreenContentDiv ();
  // start timer
  const timerCountdown = startTimer ();
}

function q1AnswerValidator () {
  //if button text matches correct answer go add points and go to next question

  //if wrong take away time and stay on page

}

document.getElementById("startButton").addEventListener("click", startQuiz);
