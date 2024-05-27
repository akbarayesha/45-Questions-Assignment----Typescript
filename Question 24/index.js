"use strict";
//  More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//  Tests for equality and inequality with strings
//  Tests using the lower case function
//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//  Tests using "and" and "or" operators.
//  Test whether an item is in a array.
//  Test whether an item is not in a array.
// More Conditional Tests
// Equality and Inequality Test
console.log("Equality test in string:", "Mango" === "Mango");
console.log("inequality test in string:", "Mango" != "Mango");
// Test using the lower case function
console.log("Lower case function test:", "HELLO".toLowerCase() === "hello");
console.log("Lower case function test:", "HELLO".toLowerCase() != "hello");
// Numerical tests involving equality and inequality
console.log("Equality test with number: ", 10 === 10);
console.log("Inequality test with number: ", 10 != 10);
// Numerical tests Greater than and less than
console.log("Greater than test: ", 15 > 12);
console.log("Less than test: ", 15 < 12);
// Greater than or equal to
console.log("Greater than or equal to test: ", 60 >= 55);
// Less than or equal to
console.log("Less than or equal to test: ", 60 <= 50);
//Test using "and" Operator
console.log("And operator test: ", 6 === 6 && 8 > 5);
//Test using "or" Operator
console.log("Or Operator test: ", 4 > 6 || 8 < 6);
// Test whether an item is in a array
const items = ["Pen", "Paper", "Book", "Chalk"];
console.log('Items in the array: ', items.includes("Pen"));
// Test Whether an item is not in a array
console.log('Items is not in the array: ', items.includes("Table"));
