/* need to countdown from whatever number, need to add local storage for
scores/high scores, "go back" button, "clear highscore" button,

*/
const startButton = document.getElementById("start-button");
var options = document.querySelector();
var questions = document.querySelector('#quiz');
var timerElement = document.querySelector(".timer-text");
var score = document.querySelector();
var highScore = document.querySelector();
var title = document.getElementById();
var correctAnswer = document.querySelector();
var homescreen = document.querySelector("#home-container");
var selectedAnswer = document.querySelector('');
var stage = 0, quiz, question, selectedAnswer, 
var timerCount
var correctAnswer = false;

//question zero: what is the question and how is it answered, create an array for all questions
let myQuestions = [
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ['Boolean', 'Value', 'Number','String'],
        answer: 'Value',
    },
//question number one:
    {
        question: "What type of bracket encloses an array?",
        options: ['{}','()','arrays do not use brackets','[]'],
        answer: '[]', 
    },
//question number two:
    {
        question: "What is the 'type of' operator value?",
        options: ['Number', 'Array', 'String', 'Boolean'],
        answer: 'String',
    },
//question number three: 
    {
        question: "Java compiler first looks for the _______ method.",
        options: ['main', 'static', 'void', 'public'],
        answer: 'main',
    },
//question number four: 
    {
        question: "What can Bootstrap replace in a time crunch?",
        options: ['HTML', 'JavaScript', 'React', 'CSS'],
        answer: 'CSS',
    },
//question number five:
    {
        question: "When you access a class in the DOM with a method what selector syntax is used?",
        options: ['.', '#', ';', '$'],
        answer: '.',
    }
]

    /*for (let i = 0; i < 4; i++) {
        if (a[i] === theValue);
        break;
    }*/
//start the quiz with a function
var time = myQuestions.length * 75;

function startButton() {
    // correctAnswer = false; move this line or remove? 
    // timerCount = 75;
    // startTimer()

    homescreen.setAttribute('class', 'hide')

    questions.removeAttribute('class')

    timerElement = setInterval(clock, 7500)

    timerElement.textContent = time;

    // askQuestion

    askQuestion()
    }

    function askQuestion() {
        // looping through my questions
        for (let i = 0; )
        // appending elments from my questions to page

        // create for loop for question choices and create button for each choice
    }
//
function correctAnswer() {
    correctAnswer = true;
}

function showQuestions() {
    var output = [];
    var answer;
}


function showQuestions() {
    for(var i = 0; i < options.length; i++) {
        answer = [];
        if(time >= myQuestions.length) {

        }
    }
}

function timerElement() {

}
