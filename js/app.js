let gamePlayed = false; // The initial state of the game
let cookiesWon = 0;
let timer; // Manages timer

const buzzerButton = document.getElementById("theBuzzer"); // Elements managed for the game
const gameMessage = document.getElementById("gameMessage");
const cookieCounter = document.getElementById("cookieCounter");

function toggleGameState() {
  clearTimeout(timer); // Clears the timer whenever the button is clicked

  if (
    gameMessage.textContent === "Too slow, You've lost your chance!" &&
    gamePlayed
  ) {
    cookiesWon = 0; // resets the cookie count if the user stops playing.
    cookieCounter.textContent = `Cookies Won: ${cookiesWon}`;
  }

  if (cookiesWon >= 50) {
    // Special message and button behavior after 50 wins
    gameMessage.textContent = "Wow... You really pressed this button 100 times. Go get some real cookies mate.";
    buzzerButton.textContent = "You WILL be Judged";
    buzzerButton.onclick = function() { 
      window.location.href = 'jumpScare.html'; // Redirects to jumpScare.html on next click
    };
    return; // Stop further execution to avoid resetting the message and button text
  }

  if (!gamePlayed) {
    gameMessage.textContent = "You won a cookie!";
    buzzerButton.textContent = "Play Again?";
    cookiesWon++; // Increments the cookies by 1
    cookieCounter.textContent = `Cookies Won: ${cookiesWon}`;
    gamePlayed = true; // Changes the state to played
  } else {
    gameMessage.textContent = ""; // Resets the game message when 'Play Again?' is pressed
    buzzerButton.textContent = "Hit Me!";
    gamePlayed = false; // Resets the game state
  }

  setupTimer(); // Sets up or resets the timer for the next round
}

function setupTimer() {
  timer = setTimeout(() => {
    gameMessage.textContent = "Too slow, You've lost your chance!";
    buzzerButton.textContent = "Play Again?";
    gamePlayed = true; // Ensures the game resets on next button click
  }, 15000); // 15 seconds countdown
}

buzzerButton.addEventListener("click", toggleGameState); // Handles game state toggle and timer reset on click

setupTimer(); // Starts timer when the page is loaded