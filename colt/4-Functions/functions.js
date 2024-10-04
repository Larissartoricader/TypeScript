"use strict";
function square(num1) {
    return num1 * num1;
}
square(2);
function greeting(person) {
    return `Hello ${person}`;
}
const doSomething = (person, age, isFunny) => { };
doSomething("Larissa", 32, true);
//For function you can definde the type of parameter
function getMeANumber() {
    return Math.random();
}
//Or a function can return different kind os returns (ex. number OR string)
function random() {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
        return randomNumber.toString();
    }
    else {
        return randomNumber;
    }
}
// it works also for anonymous function
const add = (x, y) => {
    return x + y;
};
