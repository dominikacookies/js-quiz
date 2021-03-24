
const constructQuizContainer = () => {
  const quizContainerDiv = document.createElement("div");
  quizContainerDiv.setAttribute("class", "quiz-container");
  quizContainerHeading.setAttribute("class", "quiz-heading");
  quizContainerDiv.appendChild(quizContainerHeading);
  return quizContainerDiv;
}

const startTimer = () => {
  const timer = setInterval(timerTick, 1000);
  const timerTick = () => {
    timeLeft -= 1;
    document.getElementById(time).textContent = timeLeft;

    if (timeLeft < 0) {
      clearInterval(timer)
      console.log(end)
    }
  }
}

const startQuiz = () => {
  // replace the start-game div with

  const quizDivElement = constructQuizContainer();

  document.body.appendChild(startquizdiv)

  //start timer
  // startTimer ();
};

const constructAnswerButtons = (quizContentDiv) => {
  const answerButton = document.createElement("button");
  quizContentDiv.appendChild(answerButton);
  console.log (answerButton)
  return answerButton;
}

const answerButtons = question1.answerChoices.every(constructAnswerButtons);
console.log (answerButton);
// add ids

const answerButtons = question1.answerChoices.every(constructAnswerButtons);


console.log  (question1.correctAnswer())

const button1 = document.getElementById("#1");
const button2 = document.getElementById("#2");
const button3 = document.getElementById("#3");
const button4 = document.getElementById("#4");
;
button1.addEventListener("click", q1AnswerValidator);
button2.addEventListener("click", q1AnswerValidator);
button3.addEventListener("click", q1AnswerValidator);
button4.addEventListener("click", q1AnswerValidator);