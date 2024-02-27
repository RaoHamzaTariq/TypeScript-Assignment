//  The Question no. 20 is:
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Answer:
var country = ["Pakistan", "India", "England", "China", "Australia"];
for (var i = 0; i < country.length; i++) {
    console.log("".concat(i + 1, ". ").concat(country[i]));
}
