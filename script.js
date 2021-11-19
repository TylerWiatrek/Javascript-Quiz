var startQuizButton = document.querySelector("#start-quiz");

function startQuiz (event) {
    event.preventDefault();
    

var questions = [
    {
        question: "Which data type reads true and false values?",
        A: "String",
        B: "Boolean",
        C: "Object",
        D: "Null",

    },
    {
        question: "When trying to log a value in the browser's console, what command should be used?",
        A: "browser.log",
        B: "log.browser",
        C: "console.log",
        D: "log.console",
    },
    {
        question: "The user wishes to increment the value of 'i' after each iteration, what command should they use?",
        A: "i+1",
        B: "i++",
        C: "increment.i",
        D: "i+",
    },
    {
        question: "When setting values for an array, the user should use what?",
        A: "Curly Brackets",
        B: "Quotations",
        C: "Parenthesis",
        D: "Square Brackets",
    },
    {
        question: "The parameters of a function are enclosed in what?",
        A: "Parenthesis",
        B: "Square Brackets",
        C: "Curly Brackets",
        D: "Semi-colons",
    }



];

}
//need to insert function here
startQuizButton.addEventListener("click");
