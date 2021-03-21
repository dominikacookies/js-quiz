let timeLeft = 3;
let score = 0;
const timerElement = document.getElementById("time");
const startScreenDiv = document.getElementById("startScreenContent");

const question1 = {
  questionText: "This is the question",
  answerChoices: ["1", "2", "3", "4"],
  correctAnswer: function () {
    return this.answerChoices[3]
  }
};

const constructQuizContentDiv = () => {
  // construct div to hold quiz content
  const quizContentDiv = document.createElement("div");
  // add a class and id
  quizContentDiv.setAttribute("class", "quizContent");
  quizContentDiv.setAttribute("id", "quizContent");
  
  // create h1 and populate with first question
  const quizContentH1 = document.createElement("h1");
  quizContentH1.textContent = question1.questionText;
  //append under content div
  quizContentDiv.appendChild(quizContentH1);

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
  
  // return the quiz content div
  return quizContentDiv;
}

const constructGameEndDiv = () => {
  const gameEndDiv = document.createElement("div");
  // add a class and id
  gameEndDiv.setAttribute("class", "gameEnd");
  gameEndDiv.setAttribute("id", "gameEnd");
  // create h1 and populate
  const gameEndText = document.createElement("h1");
  gameEndText.textContent = "Game Over";
  //append under content div
  gameEndDiv.appendChild(gameEndText);

  return gameEndDiv;
}

const startTimer = () => {
  timerElement.textContent = timeLeft;
  const timerTick = () => {
    timeLeft -= 1;
    timerElement.textContent = timeLeft;

    if (timeLeft < 0) {
      timerElement.textContent = "0";
      clearInterval(timer);
      console.log("end");
      // destruct quizContentDiv
      quizContentDivElement = document.getElementById("quizContent");
      quizContentDivElement.remove()
      //construct gameEndDiv
      const gameEndDivElement = constructGameEndDiv ();
      //append gameEndDiv to container
      document.getElementById("container").appendChild(gameEndDivElement);
    }
  };

  const timer = setInterval(timerTick, 1000);
}

function q1AnswerValidator () {
  //if button text matches correct answer go add points and go to next question

  //if wrong take away time and stay on page

}

function startQuiz () {
  //destruct startScreenContent div
  startScreenDiv.remove()
  // create quizContent div
  const quizContentDivElement = constructQuizContentDiv ();
  // insert quizContent div
  document.getElementById("container").appendChild(quizContentDivElement);
  // start timer
  startTimer ();
}

document.getElementById("startButton").addEventListener("click", startQuiz);
