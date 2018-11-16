// Requiring Letter module exported from letter.js
const Letter = require("./letter.js");
// Constructor function representing current word the user is attempting to guess
const Word = function () {
    // An array of new Letter objects representing the letters of the underlying word    
    this.letters = [];
    // A function that returns a string representing the word
    this.toString = function () {
        let word = "";
        for (let i = 0; i < this.letters.length; i++) {
            word += this.letters[i].displayCharacter() + " ";
        };
        return word;
    };
    // A function that takes a character as an argument and calls the guess function on each letter object 
    this.guessWord = function (characterGuess) {
        let rightAnswer = false;
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessCharacter(characterGuess)) {
                rightAnswer = true;
            }
        };
        return rightAnswer;
    };
    // A function that adds characters into this letters array of objects
    this.addCharacters = function (characterArray) {
        for (let i = 0; i < characterArray.length; i++) {
            this.letters.push(new Letter(characterArray[i]));
        };
    };
};

// Exporting our Word constructor required in index.js
module.exports = Word;