/* need to countdown from whatever number, need to add local storage for
scores/high scores, "go back" button, "clear highscore" button,

*/
const startButton = document.getElementById("start-button");
var options = document.querySelector();
var question = document.querySelector();
var timerElement = document.querySelector();
var score = document.querySelector();
var highScore = document.querySelector();
var title = document.getElementById();
var correctAnswer = document.querySelector();

var timerCount
var correctAnswer = false;


    /*for (let i = 0; i < 4; i++) {
        if (a[i] === theValue);
        break;
    }*/
//start the quiz with a function
function startButton() {
    correctAnswer = false; 
    timerCount = 75;
    startTimer()
}
//
function correctAnswer() {
    correctAnswer = true;
}

function showQuestions() {
    var output = [];
    var answer;
}
//question number one: what is the question and how is it answered
let myQuestions = {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ['Boolean', 'Value', 'Number','String']
    answer: 1,
},
//question number two:
{
    question: "What type of bracket encloses an array?",
    options: ['{}','()','arrays do not use brackets','[]']
    answer: 3,
},
//question number three:
{
    question: "What is the 'type of' operator value?",
    options: ['Number', 'Array', 'String', 'Boolean']
    answer: 2,
},
//question number four: 
{
    question: "",
    options: ['', '','', '']
    answer: []
}

function showQuestions() {
    for(var i = 0; i < options.length; i++) {
        answer = [];
    }
}

function timerElement() {

}
