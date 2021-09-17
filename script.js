const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Lever", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Text Makeup Language", correct: false },
      { text: "Hyper Text Message Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Coding Style Sheets", correct: false },
      { text: "Copy Style Sheets", correct: false },
      { text: "Code Support Systems", correct: false },
    ],
  },
  {
    question: "Inside which HTMl element do we put JavaScript?",
    answers: [
      { text: "<Scripture>", correct: false },
      { text: "<js>", correct: false },
      { text: "<javaJS>", correct: false },
      { text: "<script>", correct: true },
    ],
  },
  {
    question: "How can you add a comment in JavaScript?",
    answers: [
      { text: "<-this is a comment->", correct: false },
      { text: "*this is a comment*", correct: false },
      { text: "//this is a comment", correct: true },
      { text: "--this is a comment--", correct: false },
    ],
  },
  {
    question: "Which variable is used to assign a value to a variable?",
    answer: [
      { text: "-", correct: false },
      { text: "=", correct: true },
      { text: "+", correct: false },
      { text: "x", correct: false },
    ],
  },
];

// declared variables
var timeLeftEl = document.querySelector("#timeLeftEl");
var timeStartEl = document.querySelector("#start-btn");
var quizQuestionEl = document.getElementById("#questionDiv");
var quizContainerEl = document.getElementById("#quiz-Container");

var timeLeft = 60;

timeStartEl.addEventListener("click", setTime);

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeLeftEl.textContent = timeLeft + " seconds left.";

    if (timeLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      gameOver();
      timeLeftEl.textContent = " Quiz Over ";
    }
  }, 1000);
};




