var wordList = ['lion', 'tiger', 'panda', 'jaguar', 'gorilla', 'elephant', 'giraffe'];
var blanks = [];
var guesses = [];
var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
var wins = 0;
var losses = 0;
var remainingGuesses = 20;

for (var i = 0; i < selectedWord.length; i++){
    blanks[i] = " _ ";
    console.log(blanks, selectedWord);
};

document.addEventListener("keypress", letterPressed);


function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    guessedLetters.push(letter);
    document.getElementById("guessedLetters").innerHTML = guesses;
    console.log(guessedLetters);
}

//Fills in correct letters within word.
function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
    if (selectedWord.indexOf(letter) >= 0)
    blanks[(selectedWord.indexOf(letter))] = letter;
    document.getElementById("letter-blanks").innerHTML = ("Your word: " + blanks);
    console.log(blanks);
    if (guesses === selectedWord)
        document.getElementById("win-count").innerHTML = ("Wins: " + wins++);
        console.log(wins);
}

