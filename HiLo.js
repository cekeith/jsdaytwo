var playHiLo = function(){
  var secretNum = Math.floor(Math.random() * 100) + 1;
  var guess;
  var count = 7;
  console.log(secretNum);
  do {
    guess = parseInt(prompt("Please guess a number between 1 and 100. You have " + count + " remaining attempts"));
    while (isNaN (guess)) {
      guess = parseInt(prompt("Please guess a number between 1 and 100."));
    }
    if (guess < secretNum){
      alert("Too low!");
    }
    if (guess > secretNum){
      alert("Too high!");
    }
    count = count - 1;
  } while (guess != secretNum && count > 0);
  if (count >= 0){
    alert("You win! The secret number was " + secretNum + ".");
  }
  else {
    alert("You lose! The secret number was " + secretNum + ".");
  }
}
