var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timeLeftDisplay = document.querySelector("#time-left");
var timeLeft = 60;
var score = 0;
var questions = [
  {
    question: "Of the following, which programming language was most popular in 2020 among software developers?",
    answers: [
      { text: 'Javascript', correct: true},
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
      // correct answer javascript
    ]
  }
]


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 60 - timeleft;
  timeleft -= 1;
}, 1000);




function countDown(){
    timeLeftDisplay.innerHTML = 60;

    appTimer = setInterval(function() {
    timeLeftDisplay.innerHTML -= 1;

      if (timeLeftDisplay <= 0) {
        clearInterval(appTimer);
        }
      }, 1000)
    };



function startGame() {
    countDown();
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    score = score + 25;
    console.log(score)
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
