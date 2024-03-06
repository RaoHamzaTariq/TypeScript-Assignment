//  The Question no.44 is:
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
// Answer:
function sandwich_items(items) {
    if (items.length != 0) {
        console.log("The Summary of the sandwich items is: ".concat(items));
    }
    else {
        console.log("There is zero items for sandwich");
    }
}
sandwich_items(["Cheese", 'Ketchup', 'Sauce', 'Bread']);
sandwich_items(['Ketchup', 'Sauce']);
sandwich_items(["Cheese", 'Ketchup', 'Bread']);
