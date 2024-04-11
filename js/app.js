/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/

let gamePlayed = false; // the initaial state of the game
let cookiesWon = 0;

/*----- Cached Element References  -----*/

const buzzerButton = document.getElementById("theBuzzer"); // elements managed for the game
const gameMessage = document.getElementById("gameMessage");
const cookieCounter = document.getElementById("cookieCounter");

/*-------------- Functions -------------*/

function toggleGameState() {
  // logic that tells the game to display a winning message when a button is clicked
  if (!gamePlayed) {
    gameMessage.textContent = "You won a cookie!";
    buzzerButton.textContent = "Play Again?";
    cookiesWon++; // increments the cookies by 1.
    cookieCounter.textContent = `Cookies Won: ${cookiesWon}`;
  } else {
    gameMessage.textContent = ""; // resets the game message when play again is pressed, giving the illusion of a loop
    buzzerButton.textContent = "Hit Me!";
  }
  gamePlayed = !gamePlayed; // ensures the game starts as not(!) played.
}

/*----------- Event Listeners ----------*/

// document.getElementById('theBuzzer').addEventListener('click', function(){
//     document.getElementById('gameMessage').textContent = "You won a cookie!";
// });
buzzerButton.addEventListener("click", toggleGameState); // logic that toggles ganmeState when a button is pressed.
