//  The Question no.41 is:

// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Answer:

let magician_names : string[] = ['Hamza','Sohail','Rohail','Taha','Shayan']

function show_magicians(magician_names:string[]){
    for(let i=0; i<magician_names.length; i++){
        console.log(magician_names[i])
    }
}

show_magicians(magician_names);