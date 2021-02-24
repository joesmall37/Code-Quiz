var startButton = document.querySelector("#start-btn");
var nextQuestionButton = document.querySelector("#next-btn");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonElement = document.querySelector("#answer-buttons");
var answerButton = document.querySelector("#a-btn");
var timeLeft = 60;
var timeLeftDisplay = document.querySelector("#time-left");
var score = 0;

startButton.addEventListener("click", );
nextQuestionButton.addEventListener("click", );

// functions

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  randQuestion();
  nextQuestion();
  
}

function nextQuestion() {

}

function countDown() {
    setInterval(function() {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -=1;
        clearInterval(timeLeft = 0)
      }, 1500)
    };

function addScore() {

}

function endQuiz() {

}

function randQuestion(question) {
  question = questions.sort(() => Math.random() - .5);
}
// questions
var questions = [
  {
    question: "Of the following, which programming language was most popular in 2020 among software developers?",
    answers: [
      { text: 'Javascript', correct: true },
      { text: 'Java', correct: false },
      { text: 'C#', correct: false },
      { text: 'Assembly', correct: false }
    ]
  },
  {
    question: "In Javscript, what data type is used to store an ordered list?",
    answers: [
      { text: 'String', correct: false },
      { text: 'Object', correct: false },
      { text: 'Array', correct: true },
      { text: 'List', correct: false }
    ]
  },
  {
    question: "Who first designed Javascript?",
    answers: [
      { text: 'Peter Baelish', correct: false },
      { text: 'Brendan Eich', correct: true },
      { text: 'The Night King', correct: false },
      { text: 'Arya Stark', correct: false }
    ]
  },
  {
    question: "Of the following, which programming language is NOT a high level language",
    answers: [
      { text: 'Java', correct: false },
      { text: 'Javascript', correct: false },
      { text: 'Python', correct: false },
      { text: 'Assembly', correct: true }
    ]
  }
]
