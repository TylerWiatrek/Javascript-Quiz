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

    // var timeRemaining = setInterval(() => { 
    //     //var countdownTimer = 60;
    //     if (countdownTimer >= 1) {
    //         countdownTimer = countdownTimer - 1;
    //         timeLeftCountdown.textContent = countdownTimer;
    //         //console.log(countdownTimer);
    //     }
    //     else {
    //         clearInterval(timeRemaining);
    //         var endScreenEl = document.getElementById("end-quiz")
    //         var endScreenTimer = document.getElementById("final-score-timer")
    //         endScreenTimer.textContent = "Sorry, but time has run out!"
    //         endScreenEl.setAttribute("class", "show");
    //         questionsEl.setAttribute("class", "hide");
    //         var endScore = document.getElementById("final-score")
    //         endScore.textContent = scoreEl;
    //     };
        
    
    // }, 1000)

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
        console.log(scoreEl);

    
    }

    var timeRemaining = setInterval(() => { 
        //var countdownTimer = 60;
        if (countdownTimer >= 1) {
            countdownTimer = countdownTimer - 1;
            timeLeftCountdown.textContent = countdownTimer;
            //console.log(countdownTimer);
        }
        else {
            clearInterval(timeRemaining);
            var endScreenEl = document.getElementById("end-quiz")
            var endScreenTimer = document.getElementById("final-score-timer")
            endScreenTimer.textContent = "Sorry, but time has run out!"
            endScreenEl.setAttribute("class", "show");
            questionsEl.setAttribute("class", "hide");
            var endScore = document.getElementById("final-score")
            endScore.textContent = scoreEl;
        };
        
    
    }, 1000)
}


function endQuiz()  {
   
    
    var endScreenEl = document.getElementById("end-quiz")
    endScreenEl.setAttribute("class", "show");
    questionsEl.setAttribute("class", "hide");
    var endScore = document.getElementById("final-score")
    endScore.textContent = scoreEl;
    
    

}

    //console.log(choicesButton);
    
    


    //currentQuestion.choices.forEach(function(choices, i) {
    // for (var i = 0;i < currentQuestion.choices.length; i++) {
    //     var choicesButton = document.createElement("button");
    //     choicesButton.setAttribute("class", "choicesButton");
    //     choicesButton.setAttribute("value", currentQuestion.choices[i]);
    //     choicesButton.textContent = i+1+": " + currentQuestion.choices[i];
    //     choicesButton.onclick = questionClick();
    //     choicesEl.appendChild(choicesButton);
   // }



function questionClick() {
    currentQuestionIndex++
    if (currentQuestionIndex <= 4) {
        getQuestions();
    }
    else {
        endQuiz();
    }
    
    
    
}
//var countdownTimer = 10;
//var timeLeftCountdown = document.getElementById("timeLeft");

// var timeRemaining = setInterval(() => { 
//     //var countdownTimer = 60;
//     if (countdownTimer >= 1) {
//         countdownTimer = countdownTimer - 1;
//         timeLeftCountdown.textContent = countdownTimer;
//         //console.log(countdownTimer);
//     }
//     else {
//         clearInterval(timeRemaining);
//         var endScreenEl = document.getElementById("end-quiz")
//         var endScreenTimer = document.getElementById("final-score-timer")
//         endScreenTimer.textContent = "Sorry, but time has run out!"
//         endScreenEl.setAttribute("class", "show");
//         questionsEl.setAttribute("class", "hide");
//         var endScore = document.getElementById("final-score")
//         endScore.textContent = scoreEl;
//     };
    

// }, 1000)


//need to insert function here
startQuizButton.addEventListener("click", startQuiz);
