//  The Question no.39 is:

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.our function for three different cities, at least one of which is not in the default country.

// Answer:

function city_country(city_name:string,country_name:string){
    console.log(` "${city_name}, ${country_name}" `)
}


city_country('Karachi','Pakistan')
city_country('New York', 'America')
city_country('Paris','France')
city_country('Mumbai','India')
