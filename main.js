// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting Levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

let defaultLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector('.start');
let lvlNmaespan = document.querySelector('.message .lvl');
let secondsSpan = document.querySelector('.message .seconds');
let theWord = document.querySelector('.the-word');
let upcomingWords = document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeLeftSpan = document.querySelector('.time span');
let scoreGot = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finishMessage = document.querySelector('.finish');

//setting level name + seocnds + score
lvlNmaespan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

//display paste event
input.onpaste = function () {
    return false;
}

startButton.onclick = function () {
    this.remove();
    input.focus();
    //generate Word function
    genWords();
}


function genWords() {
    let randomWords = words[Math.floor(Math.random() * words.length)];

    let wordIndex = words.indexOf(randomWords);

    words.splice(wordIndex, 1);
    theWord.innerHTML = randomWords;

    upcomingWords.innerHTML = '';

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay();
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === '0') {
            clearInterval(start);
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWords();
                } else {
                    let span = document.createElement('span');
                    span.className = 'good';
                    let spanText = document.createTextNode('Conguats');
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upcomingWords.remove();
                }
            } else {
                let span = document.createElement('span');
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}