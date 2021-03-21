let timeLeft = 6;
let score = 0;
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
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
  gameEndDiv.appendChild(gameEndText);

  // create h2 and populate
  const highScoreSubmissionIntructions = document.createElement("h2");
  highScoreSubmissionIntructions.textContent = "Insert your username below to add your score to the highscores board.";
  //append under content div
  gameEndDiv.appendChild(highScoreSubmissionIntructions);

  //create form div
  const formDiv = document.createElement("div");
  gameEndDiv.setAttribute("class", "form");
  gameEndDiv.setAttribute("id", "form");
  gameEndDiv.appendChild(formDiv);

  //create form input
  const usernameInput = document.createElement("input");
  gameEndDiv.setAttribute("class", "usernameInput");
  gameEndDiv.setAttribute("id", "usernameInput");
  formDiv.appendChild(usernameInput);

  //create form submit button
  const submitButton = document.createElement("button");
  gameEndDiv.setAttribute("class", "submitButton");
  gameEndDiv.setAttribute("id", "submitButton");
  submitButton.textContent = "Submit"
  formDiv.appendChild(submitButton);

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

function q1Logic () {
  const q1AnswerValidator = (event) => {
    if (event.target.textContent === question1.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      event.target.setAttribute("class", "button--correct");
      console.log ("correct");
      setTimeout(() => {q2Screen()}, 800);
    } else {
      timeLeft -= 5;
      console.log ("wrong answer");
      return;
    }
  }

  function q2Screen () {
    console.log ("we're onto q2");
  }

  button1 = document.getElementById("#1");
  button1.addEventListener("click", q1AnswerValidator);
  button2 = document.getElementById("#2");
  button2.addEventListener("click", q1AnswerValidator);
  button3 = document.getElementById("#4");
  button3.addEventListener("click", q1AnswerValidator);
  button4 = document.getElementById("#4");
  button4.addEventListener("click", q1AnswerValidator); 
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
  q1Logic ();
}




document.getElementById("startButton").addEventListener("click", startQuiz);
