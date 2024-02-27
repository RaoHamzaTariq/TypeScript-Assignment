//  The Question no.44 is:

// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// Answer:

function car_information(manufacturer : string,model_name:string, color : string, fuel_consumption : number, engine_cc: number, doors:number, auto: boolean){
    let car : {
        manufacturer : string;
        model_name : string;
        color : string;
        fuel_consumption : number;
        engine_cc : number;
        doors : number;
        auto : boolean
    } = {
        manufacturer,
        model_name,
        color,
        fuel_consumption,
        engine_cc,
        doors,
        auto
    }
    return car
}

console.log(car_information('Suzuki','Alto 2011','White',10,1000,4,false));


