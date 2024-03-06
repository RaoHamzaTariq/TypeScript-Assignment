/// The Question no. 13 is:
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
/// Answer:
var fav_cars = ["Honda", "Toyota", "BMW", "Mercedes", "Lamborgani"];
for (var i = 0; i < fav_cars.length; i++) {
    console.log("I would like to own a ".concat(fav_cars[i], " motorcycle."));
}
