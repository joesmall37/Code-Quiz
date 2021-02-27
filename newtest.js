var timeLeftDisplay = document.querySelector("#time-left");
var timeLeft = 60;
var startButton = document.getElementById('start-btn');
var questionContainerElement = document.querySelector(".buttons");
startButton.addEventListener('click', startGame)

function startGame() {
    countDown();
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
}



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



function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Of the following, which programming language was most popular in 2020 among software developers?", ["JavaScript", "Java","C#", "Assembly"], "Javascript"),
    new Question("In Javscript, what data type is used to store an ordered list?", ["String", "Object", "Array", "List"], "Array"),
    new Question("Who first designed Javascript??", ["Peter Baelish", "Brendan Eich","A Faceless Man", "The Waif"], "Brendan Eich"),
    new Question("Of the following, which programming language is NOT a high level language?", ["Java", "Javascript", "Python", "Assembly"], "Assembly"),
    new Question("Is software development fun?", ["A little", "Not really", "YES", "no"], "YES")
];
// var questions = [
//   {
//     question: "Of the following, which programming language was most popular in 2020 among software developers?",
//     answers: [
//       { text: 'Javascript', correct: true},
//       { text: 'Java', correct: false },
//       { text: 'C#', correct: false },
//       { text: 'Assembly', correct: false }
//     ]
//   },
//   {
//     question: "In Javscript, what data type is used to store an ordered list?",
//     answers: [
//       { text: 'String', correct: false },
//       { text: 'Object', correct: false },
//       { text: 'Array', correct: true },
//       { text: 'List', correct: false }
//     ]
//   },
//   {
//     question: "Who first designed Javascript?",
//     answers: [
//       { text: 'Peter Baelish', correct: false },
//       { text: 'Brendan Eich', correct: true },
//       { text: 'The Night King', correct: false },
//       { text: 'Arya Stark', correct: false }
//     ]
//   },
//   {
//     question: "Of the following, which programming language is NOT a high level language",
//     answers: [
//       { text: 'Java', correct: false },
//       { text: 'Javascript', correct: false },
//       { text: 'Python', correct: false },
//       { text: 'Assembly', correct: true }
//       // correct answer javascript
//     ]
//   }
// ]


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
