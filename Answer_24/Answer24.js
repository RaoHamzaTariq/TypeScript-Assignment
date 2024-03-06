//  The Question no. 24 is:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Answer:
var name1 = "Hamza";
var name2 = 'Sohail';
console.log(name1 == name2);
console.log(name1 != name2);
console.log(name1 == name1.toLowerCase());
console.log(name1 != name1.toLowerCase());
var fav_num1 = 3;
var fav_num2 = 7;
console.log(fav_num1 == fav_num2);
console.log(fav_num1 != fav_num2);
console.log(fav_num1 >= fav_num2);
console.log(fav_num1 <= fav_num2);
console.log(fav_num1 && fav_num2 == 3);
console.log(fav_num1 || fav_num2 == 3);
var Cars = ['Honda', 'Toyota', 'BMW', 'Audi', 'Mercedes', 'Suzuki'];
console.log("BMW" in Cars);
console.log(!("Mercedes" in Cars));
