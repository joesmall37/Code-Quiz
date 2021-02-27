// Set variables here
var timeLeftDisplay = document.querySelector("#time-left");
var timeLeft = 60;
var startButton = document.getElementById('start-btn');
var questionContainerElement = document.querySelector("#buttons");
var questionElement = document.querySelector("#question");
var score = 0;
var questionIndex = 0;
var currentQuestionNumber;
var element;
var appTimer;
var currentScore = document.querySelector("#current-score");
var gameTime = 60;
var restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", reStart)

// user input score
var inputScoreEl = document.querySelector("#inputScore");
var initialsEl = document.querySelector("#initials");
var submitInitialsBtnEl = document.querySelector("#submitInitials");
var userScoreEl = document.querySelector("#score");

//View High Scores Page Elements =============================
const highScoresEl = document.querySelector("#highScores");
const scoresEl = document.querySelector("#scores");
const goBackBtnEl = document.querySelector("#goBack");
const clearScoresBtnEl = document.querySelector("#clearScores");

// user input score function
submitInitialsBtnEl.addEventListener("click", function () {
    let initValue = initialsEl.value.trim();
    if (initValue) {
        let userScore = { username: initValue, userScore: score };
        initialsEl.value = '';
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
        hide(inputScoreEl);
        renderHighScores();
        reset();
    }
});

clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});
//Renders high scores stored in local storage
function renderHighScores() {
    // Clear content
    scoresEl.innerHTML = "";
    show(highScoresEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let scoreItem = document.createElement("div");
        scoreItem.className += "row mb-3 p-2";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
        scoreItem.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].userScore}`;
        scoresEl.appendChild(scoreItem);
    }
}


// quiz questions stored here
var questions = [
		new Question("Of the following, which programming language was most popular in 2020 among software developers?", ["JavaScript", "Java","C#", "Assembly"], "Javascript"),
		new Question("In Javscript, what data type is used to store an ordered list?", ["String", "Object", "Array", "List"], "Array"),
		new Question("Who first designed Javascript??", ["Peter Baelish", "Brendan Eich","A Faceless Man", "The Waif"], "Brendan Eich"),
		new Question("Of the following, which programming language is NOT a high level language?", ["Java", "Javascript", "Python", "Assembly"], "Assembly"),
		new Question("Is software development fun?", ["A little", "Not really", "YES", "no"], "YES")
];

// quiz begins upon pressing the start button
startButton.addEventListener('click', startGame)

function startGame() {
		countDown();
		startButton.classList.add('hide')
		questionElement.classList.remove('hide')
		questionContainerElement.classList.remove('hide')
}
// timer functions

var downloadTimer = setInterval(function(){
	if(timeleft <= 0){
		clearInterval(downloadTimer);
	}
	document.getElementById("progressBar").value = 60 - timeleft;
	timeleft -= 1;
}, 1000);


function countDown(){
		var gameTime = 60;
		timeLeftDisplay.textContent = gameTime;

		appTimer = setInterval(function() {
			if ((gameTime <= 0) || (questionIndex = questions.length -1)) {
				clearInterval(appTimer);
				// end game
				return;
			}
			gameTime--;
			timeLeftDisplay.textContent = gameTime;
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
// add 25 points per right answer
Quiz.prototype.guess = function(answer) {
		if(this.getQuestionIndex().isCorrectAnswer(answer, currentScore)) {
				this.score+= 25;
				this.questionIndex++;
				return;
				// currentScore.textContent = "Score: " + currentScore;
		}
		// penalize user by three seconds for wrong answer
		gameTime -= 3;
		this.questionIndex++;

		// currentScore.textContent = "Score: " + score;
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
// once the quiz is finished  call the functions to show scores and prompt user to enter name for high score list

function populate() {
		if(quiz.isEnded()) {
				// call function for high score list here
				// function to clear timer
				// add restart button
				stopTimer();
				showScores();
				show(inputScoreEl);
		}
		else {
				// present questions
				var element = document.getElementById("question");
				element.innerHTML = quiz.getQuestionIndex().text;

				// present answers
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

// function which shows how far into the quiz we are

function showProgress() {
		currentQuestionNumber = quiz.questionIndex + 1;
		var element = document.getElementById("progress");
		element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
		questionContainerElement.classList.add("hide")
		var gameOverHTML = "<h1>Result</h1>";
		gameOverHTML += "<h2 id='score'> Thank you for playing! Your score is " + quiz.score + "!</h2>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHTML;
};

// timer functions

// var downloadTimer = setInterval(function(){
// 	if(gameTime <= 0){
// 		clearInterval(downloadTimer);
// 	}
// 	document.getElementById("progressBar").value = 60 - gameTime;
// 	gameTime -= 1;
// }, 1000);


function countDown(){
		timeLeftDisplay.textContent = gameTime;

		appTimer = setInterval(function() {
			if (gameTime <= 0) {
				clearInterval(appTimer);
				// end game
				return;
			}
			gameTime--;
			timeLeftDisplay.textContent = gameTime;
		}, 1000)
};

// function to take user name and score it to high scores

function userScore(score) {
		// save score to local storage in json
		localStorage.setItem('Object', JSON.stringify(Object));
		// retreive score from local storage in json

		var retrievedObject = localStorage.getItem('Object')

}

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





	var scores = JSON.parse(localStorage.getItem('scores')) || [];
	if ( scores.length) {
		var highscores = scores.sort(function(a,b) { return a.score - b.score }).slice(0, 5);
		// show the scores on the screen
	}


	// save a score at the end of the game
	scores.push({name: userName, score: score});
	localStorage.setItem(scores);




function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";
}


//Clears saved scores from local storage
clearScoresBtnEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    renderHighScores();
});

function stopTimer() {
    clearInterval(appTimer);
}



function reStart() {

	location.reload();
}
