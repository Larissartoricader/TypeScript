"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
function twoFer(person) {
    if (!person) {
        return "One for you, one for me";
    }
    else {
        return `One for ${person}, one for me`;
    }
}
twoFer("Larissa");
//solution: Instead of If/else I can declare a default value of person!!!
function twoFerAgain(person = "you") {
    return `One for ${person}, one for me`;
}
twoFerAgain();
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2025));
//Solution: If write this function as anonymous function, the return will give me already true or false, because I specify that it is a boolean function
const isAReallyLeapYearAgain = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isAReallyLeapYearAgain(2025));
