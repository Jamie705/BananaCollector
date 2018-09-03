// alert("something");

// Creates list/array of abc's
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses left and list of guessed letters.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuessed = [];
var computerGuess= "";

// Randomly math to choose letter in alphabet. Computer's guess. Created in funtion to reset word.
function newLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log ("Computer guessed: " + computerGuess);  
    }

    //function to reset game
function reset() {
    guessesLeft = 10;
    userGuessed = [];
    newLetter();
    }    
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {
    // Determines which key was pressed and change to lowercases
    var userGuess = event.key.toLowerCase();
    console.log("Your guess: " + userGuess);
    
    // If statments for (win/loss/guesses left)
        if (userGuess === computerGuess) {
            wins++;
            console.log ("You have guessed correctly. You win.");
            reset ();
        }    
    // If user does not match pc guess, decrement guesses left and push lettter to guessed letters.
        if (userGuess != computerGuess) {
            guessesLeft--;
            userGuessed.push(userGuess);
            console.log("Guess again.")
        }
    // If user maxes guess, reset user guesses to 10 and letters guessed
        if (guessesLeft === 0) {
            losses++;
            reset ();
        }        

        //update HTML to show wins, losses, guesses left and letters guessed
        {
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        document.querySelector('#userguessed').innerHTML = "Your guesses so far: " + userGuessed;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        document.querySelector('#guessesleft').innerHTML = "Guesses left: " + guessesLeft;
        }
    }
