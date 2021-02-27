var startButton = document.querySelector("#start-btn");
var nextQuestionButton = document.querySelector("#next-btn");
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonElement = document.querySelector("#answer-buttons");
var appTimer;
var answerButton = document.querySelector(".a-btn");
// give unique ids
var timeLeftDisplay = document.querySelector("#time-left");
var score = 0;
var randomQuestion;
var question;
var questionIndex = 0;
var gameOver = document.querySelector("#game-over");
var answerChoice;
var buttonA

startButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", nextQuestion);

var questions = [
  {
    id: 1,
    question: "Of the following, which programming language was most popular in 2020 among software developers?",
    answers: [
      { text: 'Javascript', correct: true},
      { text: 'Java', correct: false },
      { text: 'C#', correct: false },
      { text: 'Assembly', correct: false }
    ]
  },
  {
    id: 2,
    question: "In Javscript, what data type is used to store an ordered list?",
    answers: [
      { text: 'String', correct: false },
      { text: 'Object', correct: false },
      { text: 'Array', correct: true },
      { text: 'List', correct: false }
    ]
  },
  {
    id: 3,
    question: "Who first designed Javascript?",
    answers: [
      { text: 'Peter Baelish', correct: false },
      { text: 'Brendan Eich', correct: true },
      { text: 'The Night King', correct: false },
      { text: 'Arya Stark', correct: false }
    ]
  },
  {
    id: 4,
    question: "Of the following, which programming language is NOT a high level language",
    answers: [
      { text: 'Java', correct: false },
      { text: 'Javascript', correct: false },
      { text: 'Python', correct: false },
      { text: 'Assembly', correct: true }
      // correct answer javascript
    ]
  }
]

var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);
    }
}
else{
    localStorage.setItem("highscore", score);
}
// functions

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  nextQuestionButton.classList.remove("hide");
  displayQuestion();
  countDown();
}

function nextQuestion(currentQuestionIndex) {
  displayQuestion(currentQuestionIndex);
}
// maybe we'll pass the question object in to the function as an arg and then loop through it for each question
// do the same thing for answer choice
//
function next(questionIndex) {
  questionIndex ++;
  nextQuestion();
}

function countDown(){
    timeLeftDisplay.innerHTML = 60;

    appTimer = setInterval(function() {
    timeLeftDisplay.innerHTML -= 1;

      if (timeLeftDisplay <= 0) {
        clearInterval(appTimer);
        }
      }, 1500)
    };





function addScore() {
  if (answer === correct) {
    score += 25;
  }else
  // penalty for wrong answer
  timeLeft -3;
}

function endQuiz() {

}

// function displayQuestion() {
//   for (let index = 0; index < questions.length; index++) {
//     questionElement.innerText = questions[index].question;
//     chooseAnswer();
//   }
// }


function displayQuestion(questionIndex, score){
  if(questionIndex >= questions.length)
  {
    gameOver();

  }
  // check to see if the current question is the final question if so end the quiz
  // if current question === quiestion.length
  // else write the rest of the code
else

    // empty out the question section and empty the answer section
    // then display the current question
    // question currentindex[question]
    // append new question to our question section


    // change index to i
  // function insertText() {
  //   main.innerText = fakeData[counterIndex].main
  //   second.innerText = fakeData[counterIndex].second
  //   third.innerText = fakeData[counterIndex].thrid
// }

//   for (let index= 0; index < questions.length; index++) {
    questionElement.innerText = questions[index].question;
    answerButtonElement.innerText = questions[index].answers[index].text;
    // make a variable equal to creating a button
    // use the variable and empty it out
    // then add css class to this variable
    // then put the answer questionindex bracket i
    // then append it to answer choices section
    // make an onlclick and set it equal to answer checking functions ex. it will look like
    // answerChoices.onclick = checkAnswer (
      // adds event listener to the current button being clicked)
//   }
// }



// answerbuttonelement


function chooseAnswer(event) {
  event.preventDefault();
  event.stopPropagation();
  answerChoice = event.target.getAttribute();

  for (let index = 0; index < questions.length; index++) {
    answerButtonElement.innerText = questions[index].answers[index].text;
// maybe loop through these as well?
  }
  answerButtonElement.addEventListener("click", isAnswerCorrect)
  questionIndex ++

}

function isAnswerCorrect() {
  // if answerSelected = correct
  // add 20
}
function savedScore() {
  // add score to this
}
function allScores() {
  // add to localstorage
}
function addtoHighScore() {
  // if saved scores > allScores then all present it as high score
}

function endGame(gameOver) {
  gameOver.innerHTML = "Game Over! Your score is " + score;
}

function restart() {

}
// questions

// maybe manually say if answer = this, then add it to the correct function



function isCorrect() {

}

// questions.forEach(element => {
//   console.log(element.question);
//   console.log(element.answers)
// });
