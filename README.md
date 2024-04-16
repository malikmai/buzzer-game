# Malik's Buzzer Game

HTML:

gameContainer - an ID that holds all the data for the game.

theBuzzer - an ID that holds the data for the "HIT ME!" button.

gameMessage - an ID that holds the message when the button is pressed.

CSS:

box-sizing - a global setting that affects how the dimensions of elements are calculated.

body - using light CSS and FlexBox to manipluate the button to dead-center of any screen.
added extra CSS to the #gameContainer to make sure the text stays centered in the button. Also added some styling to the #theBuzzer to make the button resemble the "subscribe" button on YouTube.

JS:

added eventListeners for the clicking of the button so when pressed. A message is displayed to the user, signaling they have won a cookie... Not really though, cookies are currently out of budget. But the thought is nice (insert smiley face here).

UPDATES:

In JS, added variable "gamePlayed" and set it to false so the game starts as unplayed. Once the button is pressed, the eventListener listens for the "click' to display the gameMessage and toggles the gameState to played. Once the game state has been toggled, the user is asked if they would like to play again, resetting the game state to not played, creating an infinite loop to get cookies.

Added a cookie counter to the site so the game keeps track of how many times the user has won a cookie. Updated the HTML, CSS and JS with a cookieCounter ID and stuck it to the top right of the screen. The counter will go on infinitly or at least until the user gets bored.
I also added some extra CSS to make the website more mobile friendly. Before the site would scroll on mobile devices, now everything is on one level.

Added a win/loss/easter egg option. Now when the user loads the page they must click the buzzer within 15 seconds or they will get prompted with a message indicating they have lost the game. As for a win condition the user must get up to 50 cookies; where if they have the mental fortitude to click a boring button 50 times, they will be prompted with a funny easter egg.