"use strict";
// If I only define a variable with [] it means that the variable has to BE an EMPTY array. It is not possible to insert any values inside this array, because it has to be an empty array.
const money = [];
// Empty array does not allow a new value.
// money.push = 2;
// The right way to define a variable as an array it is to provide [] and define the type of values inside the array. Here are exemples of one type arrays:
const salary = [2344.23, 34523.23, 3452, 34, 3455.34];
salary.push(1234.56);
console.log(salary);
const pets = ["peixe", "hailing", "bob"];
pets.push("tartatura");
console.log(pets);
// I can also define the types of values inside an array by using:
const answer = [];
answer.push(true);
answer.push(true);
answer.push(false);
answer.push(true);
answer.push(true);
console.log(answer);
//first is the array empty, but already pre defined what kind of values should be inside. Because we defined Point as a type
const coords = [];
coords.push({ variableX: 123, variableY: 2837 });
console.log(coords);
coords.push({ variableX: 198, variableY: 7, variableZ: 342 });
console.log(coords);
coords[0] = { variableX: 1, variableY: 2, variableZ: 3 };
console.log(coords);
//Two Dimensional-Arrays: If I want to define a type of variable as an array inside another array and also the type of values, I should do:
const board = [["dog", "cat", "fish"]];
// Three Dimensional-Arrays: An array insede another array, inside another array:
const inceptionOfArrays = [[[1], [2], [3], [4]]];
