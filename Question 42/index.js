"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
let magicians = ['Penn & Teller', 'Dynamo', 'Shin Lim', 'Lance Burton', 'Juan Tamariz'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log("The Great", element);
    });
}
show_magicians(magicians);
