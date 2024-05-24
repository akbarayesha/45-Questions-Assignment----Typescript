"use strict";
//  Seeing the World: Think of at least five places in the world you’d like to visit.
//  Store the locations in a array. Make sure the array is not in alphabetical order.
let placesVisit = ["Istanbul", "Tokyo", "Venice", "Dubai", "Sydney"];
// Print the array in its original order.
console.log("Original Order:", placesVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order:", [...placesVisit].sort());
// Show that your array is still in its original order by printing it.
console.log("Original Order After Sorting:", placesVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:", [...placesVisit].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Order has changed:", [...placesVisit].reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original Order after reversed order:", placesVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has been changed:", [...placesVisit].sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in Reverse Alphabetical Order:", [...placesVisit].sort().reverse());
