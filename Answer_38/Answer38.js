//  The Question no.38 is:
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
// Answer:
function describe_city(city_name, country_name) {
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("The ".concat(city_name, " is in ").concat(country_name));
}
describe_city('Karachi');
describe_city('Multan');
describe_city('Lahore');
describe_city('Dehli', 'India');
describe_city('Kabul', 'Afghanistan');
