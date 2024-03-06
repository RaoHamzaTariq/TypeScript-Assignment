//  The Question no. 19 is:

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// Answer:


let guest_names: string[] = ["Hamza", "Hammad", "Rohail", "Hussain", "Sohail", "Taha"];

for (let i = 0; i < guest_names.length; i++) {
    console.log(`Hello ${guest_names[i]}! I am inviting you to dinner in my home.`);
}
console.log(`The number of people I am inviting to dinner are ${guest_names.length}`);


