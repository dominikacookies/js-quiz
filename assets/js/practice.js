
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
    timerSpanElement.textContent = timeLeft;

    if (timeLeft < 0) {
      clearInterval(timer)
      alert(time)
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