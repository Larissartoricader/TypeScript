// Union Types allows a variable to receive two or more differents types of values.

let age: number | string = 21;
age += 1;
age = "34";

// It is also possible to insert a third type

let answer: number | string | boolean = true;

answer = 23;
(answer = false), (answer = "wrong");
console.log(answer);

// I can create type and unite them

type Pet = {
  name: string;
  age: number;
  breed: string;
};

type Animal = {
  name: string;
  age: number;
  type: string;
};

let yourSpiritAnimal: Pet | Animal = {
  name: "Lion",
  age: 2,
  type: "Feline",
};
