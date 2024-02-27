//  The Question no.32 is:
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Answer:
var current_users = ['Hamza', 'Rohail', 'Sohail', 'Taha', 'Shayan'];
var new_users = ['Hammad', 'Hamza', 'Ali', 'Sohail', 'Ahmed'];
var current_users_lowercase = current_users.map(function (username) { return username.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    var new_user_lowercase = new_users[i].toLowerCase();
    if (current_users_lowercase.indexOf(new_user_lowercase) !== -1) {
        console.log("The person will need to enter a new username.");
    }
    else {
        console.log('The username is available.');
    }
}
