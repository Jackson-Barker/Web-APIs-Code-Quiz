// user clicks start button
// 60 second timer starts and question one is rendered
// the correct answer will be selected using match to select the index value that is true
// if the answer is correct a congratulations massage will be displayed and the next question will render
// if answer is incorrect a message will be displayed and 10 seconds will be deducted from the timer
// after five questions your remaining time will be your score
// you will be prompted to enter your entails
// a new html will load displaying the leader board that is stored in local storage
// const questions = [
//   {
//     question: "What does HTML stand for?",
//     answers: [
//       { text: "Hyper Text Markup Lever", correct: false },
//       { text: "Hyper Text Markup Language", correct: true },
//       { text: "Hyper Text Makeup Language", correct: false },
//       { text: "Hyper Text Message Language", correct: false },
//     ],
//   },
//   {
//     question: "What does CSS stand for?",
//     answers: [
//       { text: "Cascading Style Sheets", correct: true },
//       { text: "Coding Style Sheets", correct: false },
//       { text: "Copy Style Sheets", correct: false },
//       { text: "Code Support Systems", correct: false },
//     ],
//   },
//   {
//     question: "Inside which HTMl element do we put JavaScript?",
//     answers: [
//       { text: "<Scripture>", correct: false },
//       { text: "<js>", correct: false },
//       { text: "<javaJS>", correct: false },
//       { text: "<script>", correct: true },
//     ],
//   },
//   {
//     question: "How can you add a comment in JavaScript?",
//     answers: [
//       { text: "<-this is a comment->", correct: false },
//       { text: "*this is a comment*", correct: false },
//       { text: "//this is a comment", correct: true },
//       { text: "--this is a comment--", correct: false },
//     ],
//   },
//   {
//     question: "Which variable is used to assign a value to a variable?",
//     answer: [
//       { text: "-", correct: false },
//       { text: "=", correct: true },
//       { text: "+", correct: false },
//       { text: "x", correct: false },
//     ],
//   },
// ];

var questions = [
  {
    title: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Lever",
      "Hyper Text Markup Language",
      "Hyper Text Makeup Language",
      "Hyper Text Message Language"
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    title: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Coding Style Sheets",
      "Copy Style Sheets",
      "Code Support Systems",
    ],
    answer: "Cascading Style Sheets",
  },

  {
    title: "How can you add a comment in JavaScript?",
    choices: ["<Scripture>", "<js>", "<javaJS>", "<script>"],
    answer: "<script>",
  },

  {
    title: "How can you add a comment in JavaScript?",
    choices: ["<Scripture>", "<js>", "<javaJS>", "<script>"],
    answer: "<script>",
  },

  {
    title: "How can you add a comment in JavaScript?",
    choices: ["<Scripture>", "<js>", "<javaJS>", "<script>"],
    answer: "<script>",
  },
];

// declared variables
var timeLeftEl = document.querySelector("#timeLeftEl");
var timeStartEl = document.querySelector("#start-btn");
var introEl = document.getElementById("intro");
var quizContainerEl = document.getElementById("quiz-Container");
var questionsEl = document.getElementById("questionsEl");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var questionTitle = document.getElementById("questionTitle");
var options = document.querySelectorAll(".options");
var index = 0;

var timeLeft = questions.length * 15;

timeStartEl.addEventListener("click", setTime);
function showquestions() {
  questionTitle.innerHTML = questions[index].title;
  option1.innerHTML = questions[index].choices[0];
  option2.innerHTML = questions[index].choices[1];
  option3.innerHTML = questions[index].choices[2];
  option4.innerHTML = questions[index].choices[3];
}


function render() {
  introEl.classList.add("invisible");
  questionsEl.classList.remove("invisible");
  showquestions()

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function(){
      index++
      showquestions()
    })
   
 }

}

function setTime() {
render()
  // Sets interval in variabl
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
}

function gameOver() {}
