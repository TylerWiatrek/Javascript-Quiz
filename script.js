var startQuizButton = document.querySelector("#start-quiz");
var questionsEl = document.getElementById("questions-main");
var currentQuestionIndex = 0;
var choicesEl = document.getElementById("questions-choices");
var scoreEl = document.getElementById("final-score");
var scoreEl = 0;



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

var countdownTimer = 60;
var timeLeftCountdown = document.getElementById("timeLeft");


function startQuiz (event) {
    event.preventDefault();

    var startScreenEl = document.getElementById("quiz-main")
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class")
    getQuestions();

}

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

    

    var timeRemaining = setInterval(timeCountdown, 1000);

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

function checkAnswers() {

}
function endQuiz()  {
   
    
    var endScreenEl = document.getElementById("end-quiz")
    endScreenEl.setAttribute("class", "show");
    questionsEl.setAttribute("class", "hide");
    var endScore = document.getElementById("final-score")
    endScore.textContent = scoreEl;
    


    
    

}

function finalInitials() {
    let input = document.getElementById("inputName").value;
    window.alert("Thanks for playing, your final score is " + scoreEl + ". It has been saved under the initials: " + input)
    localStorage.setItem('initials', JSON.stringify(input))
    localStorage.setItem('score', scoreEl)
}
   



function questionClick() {
    currentQuestionIndex++
    if (currentQuestionIndex <= 4) {
        getQuestions();
    }
    else {
        endQuiz();
    }
    
    
    
}
startQuizButton.addEventListener("click", startQuiz);

    var highScoreName = document.getElementById("high-score-name");
    var highScoreValue = document.getElementById("high-score-value");
    var highScoreNames = localStorage.getItem('initials');
    var highScoreValues = localStorage.getItem('score');
    highScoreName.textContent = highScoreNames;
    highScoreValue.textContent = highScoreValues;


