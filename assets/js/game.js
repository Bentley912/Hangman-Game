


//sets initial array for word library and math for
  var words = ["Wakanda", "Batman", "Shadow", "Manhattan", "Xavier", "Wolverine", "Spawn"];
    var computerGuess = words[Math.floor(Math.random() * words.length)];
    //empty array for selected word letter split
    var letters = [];
    //Split word into indvidual letters
    var split = computerGuess.split("");
    letters.push(split);
    console.log(letters);
  //set user guesses and wins
  var user = {
    guesses: [],
    attempts: 15,
  };



  var wins = 0;
//array for dashes that equal length of word
  var dashes = [];

//creates mechanisms for key event
document.onkeyup = function(event){
// set array for words to be guessed

          var userGuess = event.key;
          console.log(computerGuess);
          console.log(userGuess);
          user.guesses.push(userGuess);
          console.log(user.guesses);
          user.attempts--;
          console.log(user.attempts);
          document.querySelector("#guesses").innerHTML = user.guesses;
          document.querySelector("#attempts").innerHTML = user.attempts;

          //get indexes where selection exists in randomArray
							function getAllIndexes(arr, val) {
							var index = [];
							for (i = 0; i < arr.length; i++) {
									if (arr[i]===val)
									index.push(val);
							 return(index);
							}
            }    
              var indexes = getAllIndexes(letters, userGuess);
							console.log(indexes);
};

//pushes dashes to array to display dashes that represent hidden letters in selected word
                for (i=1;i <= computerGuess.length;i++ ){

                    dashes.push("_");
                    //document.querySelector(".container");
                    //document.querySelector(".main-content");

                }
//displays content on page
          document.querySelector("#current").innerHTML = dashes.join("");
          document.querySelector("#counter").innerHTML = wins;
