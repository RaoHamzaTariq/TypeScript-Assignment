//  The Question no.37 is:

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Answer:

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt is ${size}-sized, and it has the message: "${message}".`);
}

make_shirt()
make_shirt("Medium")
make_shirt("Small", "Pakistan Zindabad")
make_shirt("Extra Large", "Karachi is the best city");
