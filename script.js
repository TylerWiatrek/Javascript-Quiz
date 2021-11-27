
// Setting global variables here for use later on in the js file
var startQuizButton = document.querySelector("#start-quiz");
var questionsEl = document.getElementById("questions-main");
var currentQuestionIndex = 0;
var choicesEl = document.getElementById("questions-choices");
var scoreEl = document.getElementById("final-score");
var scoreEl = 0;


// Establishing a questions array here. This array will contain all the content needed for the quiz. This array includes
// 5 questions. Each question has 4 answer choices and only 1 choice correct.
var questions = [
    {
        question: "Which data type reads true and false values?",
        choices: [
            "String",
            "Boolean",
            "Object",
            "Null",
        ],

        answers: "boolean"

    },
    {
        question: "When trying to log a value in the browser's console, what command should be used?",
        choices: [
            "brownser.log",
            "log.browser",
            "console.log",
            "log.console",
        ],

        answers: "console.log"
     
    },
    {
        question: "The user wishes to increment the value of 'i' after each iteration, what command should they use?",
        choices: [
            "i!",
            "i++",
            "increment.i",
            "i+",
        ],

        answers: "i++"
    
    },
    {
        question: "When setting values for an array, the user should use what?",
        choices: [
            "Curly Brackets",
            "Quotations",
            "Parenthesis",
            "Square Brackets",
        ],

        answers: "Square Brackets"

    },
    {
        question: "The parameters of a function are enclosed in what?",
        choices: [
            "Parenthesis",
            "Square Brackets",
            "Curly Brackets",
            "Semi-colons",
        ],

        answers: "Parenthesis"
       
    }

];
// Setting a global variable here for the time remaining. Giving the user 2 minutes (120 seconds) to complete the quiz.
var countdownTimer = 120;
var timeLeftCountdown = document.getElementById("timeLeft");

// Starting a function here that will run when the user clicks on the start quiz button.
// This function will hide the start screen and show the quiz screen which will start with the first questions in the array.
function startQuiz (event) {
    event.preventDefault();

    var startScreenEl = document.getElementById("quiz-main")
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class")
    getQuestions();

}
// Starting a function here that will run through each question and each answer choice.
function getQuestions() {

    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("questions-title");
    titleEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        
        var choicesButton = document.createElement("button");
        choicesButton.setAttribute("class", "choicesButton");
        choicesButton.setAttribute("value", currentQuestion.choices[i]);
        choicesButton.textContent = i+1+ ": " + currentQuestion.choices[i];
        choicesEl.appendChild(choicesButton);
        choicesButton.addEventListener("click", questionClick);
        
        if (currentQuestion.choices[i] === questions.answers) {
             scoreEl = scoreEl + 20;
         }
        else {
            scoreEl = scoreEl;
         }
         

    
    }

    
    // starting the time here with a setInterval function that will count down every 1000 milliseconds or 1 second.
    var timeRemaining = setInterval(timeCountdown, 1000);
    // starting a function here that will check the time remaining to ensure the user has not run out of time.
    function timeCountdown() {
        console.log(countdownTimer);
        if (countdownTimer > 0) {
            countdownTimer = countdownTimer - 1;
            timeLeftCountdown.textContent = countdownTimer;
        }
        else if (countdownTimer = 0) {
            clearInterval(timeRemaining);
        }
            
        else {
            clearInterval(timeRemaining);
            var endScreenEl = document.getElementById("end-quiz")
            var endScreenTimer = document.getElementById("final-score-timer")
            endScreenTimer.textContent = "The time has reached 0! Your score is displayed above."
            endScreenEl.setAttribute("class", "show");
            questionsEl.setAttribute("class", "hide");
            var endScore = document.getElementById("final-score")
            endScore.textContent = scoreEl;
        }
    }
    
}
// starting a function here to display the end quiz screen. this will hide the quiz questions screen and show the end quiz screen
function endQuiz()  {
   
    
    var endScreenEl = document.getElementById("end-quiz")
    endScreenEl.setAttribute("class", "show");
    questionsEl.setAttribute("class", "hide");
    var endScore = document.getElementById("final-score")
    endScore.textContent = scoreEl;
    


    
    

}
// starting a function here to save the users information after they have completed the quiz. This will prompt the user to enter
// their initials and it will save them in local storage.
function finalInitials() {
    let input = document.getElementById("inputName").value;
    window.alert("Thanks for playing, your final score is " + scoreEl + ". It has been saved under the initials: " + input)
    localStorage.setItem('initials', JSON.stringify(input))
    localStorage.setItem('score', scoreEl)
}
   


// starting a function here to run through each question after an answer choice is clicked.
function questionClick() {
    currentQuestionIndex++
    if (currentQuestionIndex <= 4) {
        getQuestions();
    }
    else {
        endQuiz();
    }
    
    
    
}
// adding an event listener here to run the startQuiz function on click
startQuizButton.addEventListener("click", startQuiz);

    // using local storage to display the current high scores. this section of javascript refers to the the high-score.html file.
    var highScoreName = document.getElementById("high-score-name");
    var highScoreValue = document.getElementById("high-score-value");
    var highScoreNames = localStorage.getItem('initials');
    var highScoreValues = localStorage.getItem('score');
    highScoreName.textContent = highScoreNames;
    highScoreValue.textContent = highScoreValues;


