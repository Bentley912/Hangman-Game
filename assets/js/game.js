

// set array for words to be guessed
var words = ["Wakanda", "Batman", "Shadow", "Manhattan", "Xavier", "Wolverine", "Spawn"];

//set user guesses and wins
var user = {
  guess: [],
};

var wins = 0;
var tries = 15;

var dashes = [];

var computerGuess = words[Math.floor(Math.random() * words.length)];
console.log(computerGuess);

      for (i=1;i <= computerGuess.length;i++ ){

          dashes.push("_");
          //document.querySelector(".container");
          //document.querySelector(".main-content");

      }

document.querySelector("#current").innerHTML = dashes.join("");
document.querySelector("#counter").innerHTML = wins;
