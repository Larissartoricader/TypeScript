// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = false;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = ["hello", "hallo"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
// function greet(name: string | string[]): void {
//   if (typeof name === "string") {
//     console.log(`Hello, ${name}!`);
//   } else {
//     for (let p of name) {
//       console.log(`Hello to all of you ${name}`);
//     }
//   }
// }
function greet(name) {
    if (Array.isArray(name)) {
        name.map(function (eachName) {
            console.log("Hello ".concat(eachName));
        });
    }
    else {
        console.log("Only you here? Hello ".concat(name));
    }
}
var listOfNames = ["Maria", "Larissa", "Anna", "Ana", "Claudia"];
var onlyOneName = "Luana";
greet(listOfNames);
greet(onlyOneName);
