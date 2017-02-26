


//sets initial array for word library and math for
var words = ["Wakanda", "Batman", "Shadow", "Manhattan", "Xavier", "Wolverine", "Spawn"];
var wins = 0;
 initialize();
function initialize(){
  computerGuess = words[Math.floor(Math.random() * words.length)];
  letters = computerGuess.split("");
  displayLetters = [];

  for ( i = 0; i<letters.length;i++){
    displayLetters.push("_ ");
  }
  userGuesses = [];
  attempts = letters.length +5;

  $('#counter').html(wins);
  $('#attempts').html(attempts);
  $('#current').html(displayLetters);
  $('#guesses').html(userGuesses);
}

$(document).on("keyup", function(){
    attempts--;
    keypress = event.key;
    userGuesses.push(keypress);


  for (i=-1;i<letters.length;i++){
     if (keypress ==letters[i]){
       displayLetters[i] = keypress;
     }
   }

   $('#attempts').html(attempts);
   $('#guesses').html(userGuesses);
   $('#current').html(displayLetters);
});
