

// set array for words to be guessed
var words = ["Wakanda", "Batman", "Shadow", "Manhattan", "Xavier", "Wolverine", "Spawn"];

//set user guesses and wins
var user = {
  guess: [],
  wins: {}
};

var tries = 15;

var computerGuess = words[Math.floor(Math.random() * words.length)];
console.log(computerGuess);

      for (i=1;i <= computerGuess.length;i++ ){

          var html = "_";
          //document.querySelector(".container");
          //document.querySelector(".main-content");
          document.querySelector("#current").innerHTML = html;
      }
