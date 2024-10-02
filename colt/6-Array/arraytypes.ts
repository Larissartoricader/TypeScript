// If I only define a variable with [] it means that the variable has to BE an EMPTY array. It is not possible to insert any values inside this array, because it has to be an empty array.

const money: [] = [];

// Empty array does not allow a new value.
// money.push = 2;

// The right way to define a variable as an array it is to provide [] and define the type of values inside the array. Here are exemples of one type arrays:

const salary: number[] = [2344.23, 34523.23, 3452, 34, 3455.34];
const pets: string[] = ["peixe", "hailing", "bob"];
