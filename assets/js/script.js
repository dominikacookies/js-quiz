let timeLeft = 300;
let score = 0;
const timerElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const startScreenDiv = document.getElementById("startScreenContent");

const question1 = {
  questionText: "What type of brackets do you place array items in?",
  answerChoices: ["Curly brackets", "Parentheses", "Angle brackets", "Square brackets"],
  correctAnswer: function () {
    return this.answerChoices[3]
  }
};

const question2 = {
  questionText: "Which of the below is the correct syntax for declaring a function?",
  answerChoices: ["function name () {}", "function name {} ()", "name function {} ()", "name function ()  {}"],
  correctAnswer: function () {
    return this.answerChoices[0]
  }
};

const question3 = {
  questionText: "What must you do before storing an object in local storage?",
  answerChoices: ["Update its name", "Turn it into an array", "Turn it into a string", "Nothing"],
  correctAnswer: function () {
    return this.answerChoices[2]
  }
};

const question4 = {
  questionText: "Which of the below methods allow you to add a css class to a html object?",
  answerChoices: ["createElement", "appendChild", "setAttribute", "getElementById"],
  correctAnswer: function () {
    return this.answerChoices[2]
  }
};

const question5 = {
  questionText: "Which of the below is not a data type in Javascript?",
  answerChoices: ["string", "none", "boolean", "number"],
  correctAnswer: function () {
    return this.answerChoices[1]
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
  quizContentH1.setAttribute("id", "quizContentH1");
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
      endQuiz ();
    }
  };
  const timer = setInterval(timerTick, 1000);
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

function q1Logic () {
  const q1AnswerValidator = (event) => {
    if (event.target.textContent === question1.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      button1.removeEventListener("click", q1AnswerValidator);
      button2.removeEventListener("click", q1AnswerValidator);
      button3.removeEventListener("click", q1AnswerValidator);
      button4.removeEventListener("click", q1AnswerValidator);
      event.target.setAttribute("class", "button--correct");
      setTimeout(() => {q2Logic()}, 500);
    } else {
      timeLeft -= 5;
      event.target.setAttribute("class", "button--wrong");
    }
  }
  button1 = document.getElementById("#1");
  button1.addEventListener("click", q1AnswerValidator);
  button2 = document.getElementById("#2");
  button2.addEventListener("click", q1AnswerValidator);
  button3 = document.getElementById("#3");
  button3.addEventListener("click", q1AnswerValidator);
  button4 = document.getElementById("#4");
  button4.addEventListener("click", q1AnswerValidator); 
}

function q2Logic () {
  populateQ2info ();
  button1.classList.remove("button--correct", "button--wrong");
  button2.classList.remove("button--correct", "button--wrong");
  button3.classList.remove("button--correct", "button--wrong");
  button4.classList.remove("button--correct", "button--wrong");

  const q2AnswerValidator = (event) => {
    if (event.target.textContent === question2.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      event.target.setAttribute("class", "button--correct");
      button1.removeEventListener("click", q2AnswerValidator);
      button2.removeEventListener("click", q2AnswerValidator);
      button3.removeEventListener("click", q2AnswerValidator);
      button4.removeEventListener("click", q2AnswerValidator);
      setTimeout(() => {q3Logic()}, 500);
    } else {
      timeLeft -= 5;
      event.target.setAttribute("class", "button--wrong");
      return;
    }
  }
  button1.addEventListener("click", q2AnswerValidator);
  button2.addEventListener("click", q2AnswerValidator);
  button3.addEventListener("click", q2AnswerValidator);
  button4.addEventListener("click", q2AnswerValidator);
}

function populateQ2info () {
  quizContentH1.textContent = question2.questionText;
  button1.textContent = question2.answerChoices[0];
  button2.textContent = question2.answerChoices[1];
  button3.textContent = question2.answerChoices[2];
  button4.textContent = question2.answerChoices[3];
}

function q3Logic () {
  populateQ3info ();
  button1.classList.remove("button--correct", "button--wrong");
  button2.classList.remove("button--correct", "button--wrong");
  button3.classList.remove("button--correct", "button--wrong");
  button4.classList.remove("button--correct", "button--wrong");
  const q3AnswerValidator = (event) => {
    if (event.target.textContent === question3.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      button1.removeEventListener("click", q3AnswerValidator);
      button2.removeEventListener("click", q3AnswerValidator);
      button3.removeEventListener("click", q3AnswerValidator);
      button4.removeEventListener("click", q3AnswerValidator);
      event.target.setAttribute("class", "button--correct");
      setTimeout(() => {q4Logic()}, 500);
    } else {
      timeLeft -= 5;
      event.target.setAttribute("class", "button--wrong");
      return;
    }
  }
  button1.addEventListener("click", q3AnswerValidator);
  button2.addEventListener("click", q3AnswerValidator);
  button3.addEventListener("click", q3AnswerValidator);
  button4.addEventListener("click", q3AnswerValidator);
}

function populateQ3info () {
  quizContentH1.textContent = question3.questionText;
  button1.textContent = question3.answerChoices[0];
  button2.textContent = question3.answerChoices[1];
  button3.textContent = question3.answerChoices[2];
  button4.textContent = question3.answerChoices[3];
}

function q4Logic () {
  populateQ4info ();
  button1.classList.remove("button--correct", "button--wrong");
  button2.classList.remove("button--correct", "button--wrong");
  button3.classList.remove("button--correct", "button--wrong");
  button4.classList.remove("button--correct", "button--wrong");
  const q4AnswerValidator = (event) => {
    if (event.target.textContent === question4.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      button1.removeEventListener("click", q4AnswerValidator);
      button2.removeEventListener("click", q4AnswerValidator);
      button3.removeEventListener("click", q4AnswerValidator);
      button4.removeEventListener("click", q4AnswerValidator);
      event.target.setAttribute("class", "button--correct");
      setTimeout(() => {q5Logic()}, 500);
    } else {
      timeLeft -= 5;
      event.target.setAttribute("class", "button--wrong");
      return;
    }
  }
  button1.addEventListener("click", q4AnswerValidator);
  button2.addEventListener("click", q4AnswerValidator);
  button3.addEventListener("click", q4AnswerValidator);
  button4.addEventListener("click", q4AnswerValidator);
}

function populateQ4info () {
  quizContentH1.textContent = question4.questionText;
  button1.textContent = question4.answerChoices[0];
  button2.textContent = question4.answerChoices[1];
  button3.textContent = question4.answerChoices[2];
  button4.textContent = question4.answerChoices[3];
}

function q5Logic () {
  populateQ5info ();
  button1.classList.remove("button--correct", "button--wrong");
  button2.classList.remove("button--correct", "button--wrong");
  button3.classList.remove("button--correct", "button--wrong");
  button4.classList.remove("button--correct", "button--wrong");
  const q5AnswerValidator = (event) => {
    if (event.target.textContent === question5.correctAnswer()) {
      score += 5;
      scoreElement.textContent = score;
      button1.removeEventListener("click", q5AnswerValidator);
      button2.removeEventListener("click", q5AnswerValidator);
      button3.removeEventListener("click", q5AnswerValidator);
      button4.removeEventListener("click", q5AnswerValidator);
      event.target.setAttribute("class", "button--correct");
      timeLeft = 0;
    } else {
      timeLeft -= 5;
      event.target.setAttribute("class", "button--wrong");
      return;
    }
  }
  button1.addEventListener("click", q5AnswerValidator);
  button2.addEventListener("click", q5AnswerValidator);
  button3.addEventListener("click", q5AnswerValidator);
  button4.addEventListener("click", q5AnswerValidator);
}

function populateQ5info () {
  quizContentH1.textContent = question5.questionText;
  button1.textContent = question5.answerChoices[0];
  button2.textContent = question5.answerChoices[1];
  button3.textContent = question5.answerChoices[2];
  button4.textContent = question5.answerChoices[3];
}



function endQuiz () {
  // destruct quizContentDiv
  quizContentDivElement = document.getElementById("quizContent");
  quizContentDivElement.remove()
  //construct gameEndDiv
  const gameEndDivElement = constructGameEndDiv ();
  //append gameEndDiv to container
  document.getElementById("container").appendChild(gameEndDivElement);
  //submit score
  document.getElementById("submitButton").addEventListener("click", submitHighScore);

}

function submitHighScore (event) {
  event.preventDefault();
  console.log ("submitted");
  //localStorage.setItem("score", score)
  const usernameInput = document.getElementById("usernameInput");    
  const username = usernameInput.value.trim(); 

  const highscoreObject = {
    username,
    score,
  };

  const highscoreObjectString = JSON.stringify(highscoreObject);
  localStorage.setItem("highscore", highscoreObjectString);
  //localStorage.setItem("username", username);
    
    //const inputUsernameString = JSON.stringify(username);
    //localStorage.setItem("username", inputUsernameString);
}




document.getElementById("startButton").addEventListener("click", startQuiz);

