var userScore = 0;
var timer;
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons")
var timeLeftDisplay = document.querySelector("#time-left");
var startCountDown = document.querySelector("#start-countdown");
var timeLeft = 60;
var answerTimer;
var answerOne = document.querySelector("#btn-1");
var answerTwo = document.querySelector("#btn-2");
var answerThree = document.querySelector("#btn-3");
var answerFour = document.querySelector("#btn-4");
var nextButton = document.querySelector("#next-btn");
var answerButtons = document.querySelector("#answer-buttons")
var quizComplete = document.querySelector("#quiz-complete")


// array containing questions
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

startButton.addEventListener("click", beginGame);
// main function where the game will take place inside of
function beginGame() {
    // hide the start button
    startButton.classList.add('hide');
    // display the first questions
    questionContainerElement.classList.remove('hide');
    // questionOne();
    // start the timer
    countDown();
    questionOne();
    // if the question is correct add to the score
    score();
    // upon submitting the first question, choose the next question
    // if the question is correct add to the score
    score();
    // upon submitting the second question, choose the next question
    // if the question is correct add to the score
    score();
    // upon submitting the second question, choose the next question
    // if the question is correct add to the score
    score();
    // upon submitting the second question, choose the next question

    // if the question is correct add to the score
    score();
    // add the scores together and tell the user, "your score is (score)"
    // let's figure out a way to insert the score function within each question function to make it more readable

}
// loop through questions
// set question element text
// set answerOne, two, three and four textContent current question answer
// set data-correct attribute for each to .correct

// addeventlistener to the answer-buttons container 'click'
// if (event.target.matches('button')) {}
  //  var isCorrect = event.target.dataset.correct
  // socre(isCorrrect)

// score(isCorrect) { // win() or lose() }

// functions containing the questions
function questionOne() {
// display the question
questionElement.innerText = questions[0].question;
// display the answers
answerOne.innerText = questions[0].answers[0].text;
answerTwo.innerText = questions[0].answers[1].text;
answerThree.innerText = questions[0].answers[2].text;
answerFour.innerText = questions[0].answers[3].text;
// make a way to select the answer and update score and move on
// update score.text.addEventListener("click", questionTwo);
answerButtons.addEventListener("click", questionTwo)

}
function questionTwo() {
// display the question
questionElement.innerText = questions[1].question;
// display the answers
answerOne.innerText = questions[1].answers[0].text;
answerTwo.innerText = questions[1].answers[1].text;
answerThree.innerText = questions[1].answers[2].text;
answerFour.innerText = questions[1].answers[3].text;
answerButtons.addEventListener("click", questionThree)

}
function questionThree(userScore) {
// display the question
questionElement.innerText = questions[2].question;
// display the answers
answerOne.innerText = questions[2].answers[0].text;
answerTwo.innerText = questions[2].answers[1].text;
answerThree.innerText = questions[2].answers[2].text;
answerFour.innerText = questions[2].answers[3].text;

answerButtons.addEventListener("click", questionFour)

}
function questionFour() {
// display the question
questionElement.innerText = questions[3].question;
// display the answers
answerOne.innerText = questions[3].answers[0].text;
answerTwo.innerText = questions[3].answers[1].text;
answerThree.innerText = questions[3].answers[2].text;
answerFour.innerText = questions[3].answers[3].text;
quizFinished();

}
// function for the timer
function countDown() {
    setInterval(function() {
        if(timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -=1;
    }, 1500
    )
}
// function for the score
function score() {
    if(questions.question == true) {
    userScore += 20;
}

}

function quizFinished() {
    quizComplete.innerText = "You have completed the quiz! Your final score is "+ userScore;

}
