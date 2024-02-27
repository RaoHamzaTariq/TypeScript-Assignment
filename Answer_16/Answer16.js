/// The Question no. 16 is:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
/// Answer:
// Program 15:
var guest_names = ["Hamza", "Sohail", "Rohail", "Taha", "Shayan"];
for (var i = 0; i < guest_names.length; i++) {
    console.log("Hello! ".concat(guest_names[i], ",I am inviting you to dinner so Please you will have to come to my home on dinner tommorrow."));
}
console.log("----------------------------------------------------");
var guest_cannot_make_dinner = guest_names[4];
console.log("The ".concat(guest_cannot_make_dinner, " can't make the dinner"));
console.log("----------------------------------------------------");
guest_names[4] = "Hammad";
for (var i = 0; i < guest_names.length; i++) {
    console.log("Hello! ".concat(guest_names[i], ",I am inviting you to dinner so Please you will have to come to my home on dinner tommorrow."));
}
console.log("----------------------------------------------------");
// Now here i started the answer of program 16 
console.log("I am informing you that I found a bigger dinner table.");
console.log("----------------------------------------------------");
guest_names.unshift("Ali");
guest_names.splice(3, 0, "Hussain");
guest_names.push("Ahmed");
for (var i = 0; i < guest_names.length; i++) {
    console.log("Hello! ".concat(guest_names[i], ",I am inviting you to dinner so Please you will have to come to my home on dinner tommorrow."));
}
