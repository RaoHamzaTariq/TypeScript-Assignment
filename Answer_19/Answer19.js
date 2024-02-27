//  The Question no. 19 is:
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// Answer:
var guest_names = ["Hamza", "Hammad", "Rohail", "Hussain", "Sohail", "Taha"];
for (var i = 0; i < guest_names.length; i++) {
    console.log("Hello ".concat(guest_names[i], "! I am inviting you to dinner in my home."));
}
console.log("The number of people I am inviting to dinner are ".concat(guest_names.length));
