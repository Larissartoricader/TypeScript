"use strict";
// How to write a variable in TypeScript: const/let name : type = value;
const newVariable = "Hello, There";
// String type
let movieTtile = "Titanic";
movieTtile = "Mamma Mia";
// As soon I define what Kind of type the variable it is, I can not by mistake assign another type of value than the same type of value. I also can not user methods which are apply for numbers and boleans, for intanse, Mathround (number) oder inclues (bolean). TS will show me only methods apply for my defined kind of type, in this case: string:
