// Global Variables
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

// Function to generate what happens next
function nextSequence() {
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
}
