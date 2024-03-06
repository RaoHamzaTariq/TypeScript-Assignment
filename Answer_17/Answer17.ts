/// The Question no. 17 is:

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

/// Answer:

// Program 16:
let guest_names : string[] = ['Hamza','Sohail','Rohail', 'Taha','Hammad']
console.log("I am informing you that I found a bigger dinner table.")
console.log("----------------------------------------------------");
guest_names.unshift("Ali");
guest_names.splice( 3, 0, "Hussain");
guest_names.push("Ahmed");
for(let i = 0; i < guest_names.length; i++){
    console.log(`Hello! ${guest_names[i]},I am inviting you to dinner so Please you will have to come to my home on dinner tommorrow.`)
}
console.log("----------------------------------------------------");

// Now I am Starting Program 17:

console.log("I am now inviting only two people for dinner because my new dinner table won't arrive in time for the dinner")

while (guest_names.length > 2){
    let removed_guest : string | undefined = guest_names.pop();

    console.log(`I am sorry to ${removed_guest} for not inviting them to dinner`);
}

for( let i =0 ; i< guest_names.length; i++){
    console.log(`${guest_names[i]} are inviting to the dinner in my home`);
}

while (guest_names.length > 0){
    guest_names.pop();
}

console.log(guest_names);