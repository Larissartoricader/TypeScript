// When we want to define the values of an array, we can use union for the possible values.
var myAnswer = [
    1,
    "hello",
    3,
    "its me",
    5,
    "I was wondering",
    7,
];
// IMPORTANT: The Notation of the type matters!
var arrayOne = ["hello", "Larissa"]; // This is OR number value OR an array of strings
var arrayTwo = [1, 2, 3]; // This is OR a string or an array of numbers
var arrayThree = [1, 2, 3, 4]; // This is an array that allows values as numbers - OR - strings, not BOTH;
var arrayFour = [1, "two", 3, "four", 5]; // This is array that alows values as number - AND - string, BOTH!
var favoriteAnimal = [];
favoriteAnimal.push({ name: "Bob", age: 2, breed: "shepperd" });
favoriteAnimal.push({ name: "lion", age: 32, specie: "feline" });
console.log(favoriteAnimal);
