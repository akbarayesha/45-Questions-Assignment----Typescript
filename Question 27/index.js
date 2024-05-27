"use strict";
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alienColor = "Green";
// Version 1
//If the alien is green, print a message that the player earned 5 points.
if (alienColor === "Green") {
    console.log("Version 1: The player earned 5 points.");
}
// If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor === "Yellow") {
    console.log("The player earned 10 points.");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alienColor === "Red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
// Version 2
//If the alien is green, print a message that the player earned 5 points.
alienColor = "Yellow";
if (alienColor === "Green") {
    console.log("The player earned 5 points.");
}
// If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor === "Yellow") {
    console.log("Version 2: The player earned 10 points.");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alienColor === "Red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
// Version 3
//If the alien is green, print a message that the player earned 5 points.
alienColor = "Red";
if (alienColor === "Green") {
    console.log("The player earned 5 points.");
}
// If the alien is yellow, print a message that the player earned 10 points.
else if (alienColor === "Yellow") {
    console.log("The player earned 10 points.");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alienColor === "Red") {
    console.log("Version 3: The player earned 15 points.");
}
else {
    console.log("Please select the right color");
}
