
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







const questions = [
  { question1 : {
      questionText: "What type of brackets do you place array items in?",
      answerChoices: ["Curly brackets", "Parentheses", "Angle brackets", "Square brackets"],
      correctAnswer: function () {
      return this.answerChoices[3]
      }
    }
  },
]

questions[0].question1.questionText









//questions array
const questions = [
  { questionText: "What type of brackets do you place array items in?",
    answerChoices: ["Curly brackets", "Parentheses", "Angle brackets", "Square brackets"],
    correctAnswer: function () {
      return this.answerChoices[3]
    }
  },
  { questionText: "Which of the below is the correct syntax for declaring a function?",
    answerChoices: ["function name () {}", "function name {} ()", "name function {} ()", "name function ()  {}"],
    correctAnswer: function () {
      return this.answerChoices[0]
    }
  },
  { questionText: "What must you do before storing an object in local storage?",
    answerChoices: ["Update its name", "Turn it into an array", "Turn it into a string", "Nothing"],
    correctAnswer: function () {
    return this.answerChoices[2]
    }
  },
]

// loop to rotate through populating questions
question[0].questionText


var currentQuestion = 0;
// question[currentQuestion]






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
      button1.removeEventListener("click", q2AnswerValidator);
      button2.removeEventListener("click", q2AnswerValidator);
      button3.removeEventListener("click", q2AnswerValidator);
      button4.removeEventListener("click", q2AnswerValidator);
      setTimeout(() => {q3Logic()}, 500);
    }
  }
  button1.addEventListener("click", q2AnswerValidator);
  button2.addEventListener("click", q2AnswerValidator);
  button3.addEventListener("click", q2AnswerValidator);
  button4.addEventListener("click", q2AnswerValidator);
}

// populate quiz content elements with question 2 information
function populateQ2info () {
  quizContentH1.textContent = question2.questionText;
  button1.textContent = question2.answerChoices[0];
  button2.textContent = question2.answerChoices[1];
  button3.textContent = question2.answerChoices[2];
  button4.textContent = question2.answerChoices[3];
}


function populateTable () {
  let currentIndex = 0;
  let place = currentIndex + 1;
  const table = document.getElementById("table");
  row = table.insertRow();
  row.insertCell().textContent = place;
  row.insertCell().textContent = orderedScores[currentIndex].username;
  row.insertCell().textContent = orderedScores[currentIndex].score;
};