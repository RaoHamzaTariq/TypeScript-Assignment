/// The Question no. 14 is:

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

/// Answer:

let guest_names : string[] = [ "Hamza","Sohail", "Rohail","Taha","Shayan"];

for(let i = 0; i < guest_names.length; i++){
    console.log(`Hello! ${guest_names[i]},I am inviting you to dinner so Please you will have to come to my home on dinner tommorrow.`)
}
