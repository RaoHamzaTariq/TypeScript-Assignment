//  The Question no.29 is:
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Answer:
var fruits = ['Mango', 'Orange', 'Banana'];
if ('Mango' in fruits) {
    console.log("You really like Mango");
}
if ('Banana' in fruits) {
    console.log("You really like Banana");
}
if ('Orange' in fruits) {
    console.log("You really like Orange");
}
if ('Apple' in fruits) {
    console.log("You really like Apple");
}
if (fruits.includes('Mango')) {
    console.log("You really like Grapes");
}
