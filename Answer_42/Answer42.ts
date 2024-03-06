//  The Question no.42 is:

// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// Answer:

let magician_names : string[] = ['Hamza','Sohail','Rohail','Taha','Shayan']

function make_great(magician_names:string[]){
    for(let i=0; i<magician_names.length; i++){
        console.log(`The Great ${magician_names[i]}`)
    }
}

make_great(magician_names);