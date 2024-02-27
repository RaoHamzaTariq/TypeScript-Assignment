//  The Question no.37 is:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Answer:
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is ".concat(size, "-sized, and it has the message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Pakistan Zindabad");
make_shirt("Extra Large", "Karachi is the best city");
