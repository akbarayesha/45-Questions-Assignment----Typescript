"use strict";
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//  Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//  Add one new guest to the beginning of your array.
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list = ["Ayesha", "Bisma", "Alisha", "Ansha"];
let canNotAttendd = "Ansha";
// console.log(canNotAttendd + " " +"can not attend the dinner tomorrow!");
let newGuestt = "Fatima";
guest_list[guest_list.indexOf(canNotAttendd)] = newGuestt;
// console.log(guest_list);
// guest_list.map((items) => console.log(`Dear ${items}, You are cordially invited to the dinner tomorrow!`))
// Add new guest to the begining array!
let guestBeg = "Hania";
guest_list.unshift(guestBeg);
// console.log(guest_list);
// Add new guest to the middle array!
let middleGuest = "Ayat";
let middleIndex = guest_list.length / 2;
guest_list.splice(middleIndex, 0, middleGuest);
// console.log(guest_list);
// Add new guest to the end of the array!
guest_list.push("Ayeza");
// console.log(guest_list);
guest_list.map((items) => console.log(`Dear ${items}, You are cordially invited to dinner tomorrow as we have found a bigger table.`));
