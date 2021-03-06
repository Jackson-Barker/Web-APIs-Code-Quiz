// user clicks start button
// 60 second timer starts and question one is rendered
// the correct answer will be selected using match to select the index value that is true
// if the answer is correct a congratulations massage will be displayed and the next question will render
// if answer is incorrect a message will be displayed and 10 seconds will be deducted from the timer
// after five questions your remaining time will be your score
// you will be prompted to enter your entails
// a new html will load displaying the leader board that is stored in local storage

// html elements
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var quizOverT = false;

// shuffles questions
let shuffledQuestions, currentQuestionIndex;

// event listeners for timer and quiz
startButton.addEventListener("click", setTime);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// hides start button, shuffles questions, removes hide from questions
function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

// displays next question and resets answers
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//show question function
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// timer functions and variables
function quizOver() {
  endTime = currentTime;
  quizOverT = true;
  removeEventListener("click", setTime);
  currentTime = currentTime;
  console.log("over");
}
// timer variables 
var endTime;
var currentTime;

// timer function
function setTime() {
  var timeInterval = setInterval(function () {
    if (!quizOverT) currentTime--;

    timerEl.textContent = currentTime + "seconds left.";

    if (currentTime <= 0) {
      clearInterval(timeInterval);
      quizOver();
      timerEl.textContent = "quiz Over!!";
    }
  }, 1000);
  var currentTime = questions.length * 15;
}

// hides next button until questions is answered
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// function determines if questions is correct and determines what navigation button is displayed based 
// which question you are on 
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (!correct) {
    currentTime -= 10;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    quizOver();
  }
}

// color class change function
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// attempt at creating high score page 
const person = {
  name:"persons name",
  time: currentTime
}

function storeMyStuff(){
  window.localStorage.setItem("user", JSON.stringify(person))
}

// quiz Questions
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
];
