//  The Question no. 20 is:

// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Answer:

let country: string[] = ["Pakistan", "India", "England", "China", "Australia"];

for (let i = 0; i < country.length; i++) {
    console.log(`${i + 1}. ${country[i]}`);
}
