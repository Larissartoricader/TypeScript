"use strict";
// Union Types allows a variable to receive two or more differents types of values.
let age = 21;
age += 1;
age = "34";
// It is also possible to insert a third type
let answer = true;
answer = 23;
(answer = false), (answer = "wrong");
console.log(answer);
let yourSpiritAnimal = {
    name: "Lion",
    age: 2,
    type: "Feline",
};
