// This constructor should either display an underlying character or a blank placeholder 
const Letter = function (character) {
    // A string value to store the underlying character for the letter
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet (characters will start at "false")
    this.boolean = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder if not
    this.displayCharacter = function () {
        if (this.boolean === true) {
            return this.character;
        } else {
            return '_';
        }
    };
    // A function that checks a character argument against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly
    this.guessCharacter = function (guess) {
        if (guess === this.character) {
            this.boolean = true;
            return true;
        } else {
            return false;
        }
    };
};

// Exporting Letter constructor requeired in word.js
module.exports = Letter;
