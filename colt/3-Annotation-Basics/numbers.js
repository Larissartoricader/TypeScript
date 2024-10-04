"use strict";
let myAge = 37;
function MyAgeInTheFuture() {
    console.log(myAge);
    return myAge + 1;
}
MyAgeInTheFuture();
Math.round(myAge);
// Number allows only number methods
const myBolean = true;
//Type Inference
//It's not necessary to define strings, numbers or booleans, because typeScript will do that automatically.
let musicalMovie = "Evita";
// musicalMovie = 1;  // This reassign will be identiy already as an error because of the first declaration of Variable.
