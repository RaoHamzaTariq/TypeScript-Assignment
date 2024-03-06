/// The Question no. 15 is:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
/// Answer:
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
