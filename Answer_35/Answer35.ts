//  The Question no.35 is:

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!

// Answer:

let animals : string[] = ['Lion','Leopard','Tiger'];

for( let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("These animals of these species have common family. These have rounded heads and short muscles. They have excellent eyesight and hearing and a good sense of smell. The big cats in this family, like the lion, tiger, jaguar and leopard, can roar, but they can't purr. ")
console.log("Any of these animals would make a great pet!");