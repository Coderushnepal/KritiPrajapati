var body = document.body;
var mainWrapper = document.createElement('div');
mainWrapper.classList.add("main-wrapper");
body.style = `    
    background-color: #f4f6fa;
`;

mainWrapper.style = `
    width: 760px;
    margin: 40px auto;
    background-color: #002851;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    height: 70vh;
    overflow: hidden;
    padding: 40px 120px;
    position: relative;
`;

body.appendChild(mainWrapper);

var titleGame = document.createElement('h1');
titleGame.innerHTML = "Hangman";

var description = document.createElement('p');
description.innerHTML = "Find the hidden word - Enter a letter";

titleGame.style = `
    text-align : center;`;

description.style = `
    text-align: center;
    margin: 10px 0 70px;
`;
mainWrapper.appendChild(titleGame);
mainWrapper.appendChild(description);

var figureContainer = document.getElementById("figure-container");
mainWrapper.appendChild(figureContainer);

var figureParts = document.getElementsByClassName("figure-part");

figureContainer.style = `
    fill: transparent;
    stroke: #fff;
    stroke-width: 4 px;
    stroke-linecap: round;
    float: left;
`;

var wordsContainer = document.createElement("div");
wordsContainer.style = `
    float: left;
    padding: 0 30px;
    font-size: 20px;
`;

var wordContainer = document.createElement("div");
wordContainer.id = "word-container";
var wrongLettersContainer = document.createElement("div");
wrongLettersContainer.id = "wrong-letters-container";

wordContainer.style = `margin-top: 208px;`;
wrongLettersContainer.style = `margin-top: -200px;
margin-left: 40px;`;

wordsContainer.appendChild(wordContainer);
wordsContainer.appendChild(wrongLettersContainer);
mainWrapper.appendChild(wordsContainer);

var resultBox = document.createElement("div");
resultBox.id = "result-msg";
resultBox.class = "result-msg";

var result = document.createElement("p");

var btnReset = document.createElement("button");
btnReset.innerHTML = "Play Again";
btnReset.classList.add("btn-play");

resultBox.appendChild(result);
resultBox.appendChild(btnReset);
mainWrapper.appendChild(resultBox);

resultBox.style = `
    display: none;
    background-color: rgba(10,13,15, 0.8);
    width: 300px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-60%);
    border-radius: 8px;
    text-align: center;
    padding: 30px 20px;
    font-size: 16px;
    font-weight: 600;  
`;

btnReset.style = `
    border: 0;
    border-radius: 3px;
    background-color: #008080;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 12px 22px;
    cursor: pointer;
    margin-top: 20px;
`;

notificationBox = document.createElement('div');
mainWrapper.appendChild(notificationBox);

notificationBox.style = `
    position: absolute;
    bottom: 30px;
    background-color: rgba(76, 97, 174, 0.3);
    border-radius: 3px;
    padding: 10px;
    display: none;
    margin-left: 18%;`;

btnReset.addEventListener("click", function() {
    window.removeEventListener("keydown", keydownListener);
    isPlaying = true;
    correctCount = 0;
    wrongLetterCount = 0;
    // gameWord = null;
    selectedWords = [];
    inDisplayWordArray = [];
    resultBox.style.display = "none";
    clearContainer(wrongLettersContainer);
    initializeGame();
});

const words = [
    "disaster",
    "population",
    "bathroom",
    "enthusiasm",
    "management",
    "impression",
    "coffee",
    "movie",
    "homework",
    "song",
    "setting",
    "thanks",
    "historian",
    "response",
    "system",
    "leader",
    "government",
    "independence",
    "accident",
    "emphasis",
    "highway",
    "courage",
    "topic",
    "charity",
    "climate",
    "engineering",
    "river",
    "teacher",
    "measurement",
    "winner",
    "reading",
    "committee",
    "decision",
    "apartment",
    "departure",
    "obligation",
];

var gameWord;
var gameWordArray;
var inDisplayWordArray = [];
var selectedWords = [];
var isPlaying = true;
var correctCount = 0;
var wrongLetterCount = 0;

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function displayWord() {
    clearContainer(wordContainer);
    // inDisplayWordArray = ['_', 'p', 'p', '_', '_']
    inDisplayWordArray.forEach(function(letter) {
        var letterBox = document.createElement("span");
        letterBox.innerHTML = ` ${letter} `;
        wordContainer.appendChild(letterBox);
    });
}

function notification(message) {
    notificationBox.innerHTML = message;
    notificationBox.style.display = "block";
    setTimeout(() => {
        notificationBox.style.display = "none";
    }, 1000);
}

function gameOver(message) {
    isPlaying = false;
    result.innerHTML = message;
    setTimeout(function() {
        resultBox.style.display = "block";
    }, 500);
}

function keydownListener(e) {
    if (isPlaying && e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (selectedWords.includes(letter)) {
            return notification(`You have already entered '${letter}' letter`);
        }

        selectedWords.push(letter);

        var indexes = [];
        // apple => ['a','p','p','l','e']
        // letter: p
        for (var i = 0; i < gameWordArray.length; i++) {
            if (gameWordArray[i] === letter) {
                indexes.push(i);
                correctCount++;
            }
        }
        if (indexes.length) {
            // correct letter pressed
            indexes.forEach(function(index) {
                inDisplayWordArray[index] = letter;
            });
            displayWord();

            if (correctCount === gameWord.length) {
                // game completed
                gameOver("Hurray! You won.");
            }
        } else {
            // incorrect letter pressed
            wrongLetterCount++;
            var wrongLetterSpan = document.createElement("span");

            if (wrongLetterCount === 1) {
                wrongLetterSpan.innerHTML = `Wrong Letters : <br\> ${letter}`;
            } else {
                wrongLetterSpan.innerHTML = `, ${letter}`;
            }
            wrongLettersContainer.appendChild(wrongLetterSpan);

            figureParts[wrongLetterCount - 1].style.visibility = "visible";

            if (wrongLetterCount === 6) {
                gameOver(`Oops! You lost.<br/>The right word is "${gameWord}".`);
            }
        }
    }
}

function initializeGame() {
    Array.from(figureParts).forEach(function(part) {
        part.style.visibility = "hidden";
    });

    var randomNumber = Math.floor(Math.random() * words.length);
    gameWord = words[randomNumber];
    gameWordArray = gameWord.split("");
    gameWordArray.forEach(function(letter) {
        inDisplayWordArray.push("_");
    });

    // console.log(gameWord, "gameWord");
    displayWord();

    window.addEventListener("keydown", keydownListener);
}

initializeGame();