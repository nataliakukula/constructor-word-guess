// Requiring Word module exported from word.js
const Word = require("./word.js");
//Requiring Inquirer npm package:
const inquirer = require('inquirer');

const randomWords = ["godfather", "casablanca", "pulpfiction"];

let randomWord;
let characterArray;
let wordToGuess;
let guessCount;

// // TODO recognizing spaces and uppercase (apostrophies?)
// // TODO when chosing the random word pop or split the work that was chosen
// // TODO simplify code - pass the letter array through the construction
// // TODO when the user guesses all the words - stop the app

function startGame() {
    // Randomly selects a word from the collection of movie titles:
    randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    characterArray = randomWord.split("");
    // Use the Word constructor to store it:
    wordToGuess = new Word();
    wordToGuess.addCharacters(characterArray);
    guessCount = 10;
};

startGame();

// Prompts the user for each guess and keeps track of the user's remaining guesses
function letterGuess() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letterAnswer"
            },
        ])
        .then(answers => {
            let answer = wordToGuess.guessWord(answers.letterAnswer);
            let guessesSoFar = wordToGuess.toString();
            let guessCheck = guessesSoFar.split(" ").join("");

            if (guessCheck === randomWord) {
                console.log(`\nCORRECT!\n${guessesSoFar}\nYou got it right! Next word!\n`);
                startGame();
                letterGuess();
            } else if (guessCount === 1) {
                console.log(` \nINCORRECT!\n${guessesSoFar}\n0 guesses remaining!\nSorry, the word was: ${randomWord}. Try again!\n`);
                startGame();
                letterGuess();
            } else if (guessCount > 1 && answer === true) {
                console.log(`\nCORRECT!\n${guessesSoFar}\n`);
                letterGuess();
            } else if (guessCount > 1 && answer === false) {
                guessCount--;
                console.log(` \nINCORRECT! \n${guessCount} guesses remaining!\n${guessesSoFar}\n`);
                letterGuess();
            };
        });
};

letterGuess();