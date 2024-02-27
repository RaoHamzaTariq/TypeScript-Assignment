//  The Question no.43 is:

// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Answer:


let magicianNames: string[] = ['Hamza', 'Sohail', 'Rohail', 'Taha', 'Shayan'];

function make_great(magicians: string[]): string[] {
    let greatest_magicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        greatest_magicians.push(`The greatest magician of all time is ${magicians[i]}`);
    }

    return greatest_magicians;
}

function show_magicians(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let great_magicaian: string[] = make_great(magicianNames);

show_magicians(magicianNames);
show_magicians(great_magicaian);
