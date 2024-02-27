//  The Question no.42 is:
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
// Answer:
var magician_names = ['Hamza', 'Sohail', 'Rohail', 'Taha', 'Shayan'];
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        console.log("The Great ".concat(magician_names[i]));
    }
}
make_great(magician_names);
