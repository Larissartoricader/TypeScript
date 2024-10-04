"use strict";
const onePerson = {
    name: "Larissa",
    lastName: "Sartori",
    age: 37,
};
// How to define a parameter as object
function newPrintName(person) {
    console.log(person);
}
newPrintName(onePerson);
// I can also define in the function, what kind of key-properties-types have the Object, in This case, I only able to use the keyproperty that I declare in the function. I can not extende to other property, because I didnt mention them inside the function. So if I want to also log Age, It will no be possible, because only Name and LastName were declare as part of the object.
function printName(person) {
    console.log(`${person.name} ${person.lastName}`);
}
printName({ name: "Um Novo Nome", lastName: "Um Novo Sobrenome" });
//But if write the object as variable and write which key-property of this variable I need for my function. In this case, the object variable can have more key-properties and the function will only look for the ones that it needs to run.
printName(onePerson);
// By Writing the a variable that IS an object it is possible to specify not only the type of this variable, but also the types of the key property values inside:
let dog = {
    name: "Lulu",
    age: 2,
    isAngry: false,
};
// What happens if a function should return an OBJECT? It is possible to define the function return like void, number, string OR {} and it means an object:
const coordinate = { x: 584, y: 5842 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
