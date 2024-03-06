//  The Question no.38 is:

// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.

// Answer:

function describe_city(city_name:string, country_name:string = "Pakistan"){
    console.log(`The ${city_name} is in ${country_name}`)
}

describe_city('Karachi')
describe_city('Multan')
describe_city('Lahore')
describe_city('Dehli','India')
describe_city('Kabul','Afghanis')