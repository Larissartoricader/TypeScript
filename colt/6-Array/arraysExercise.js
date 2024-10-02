// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var age = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [[]];
var myInventar = [
    {
        name: "coffee mug",
        price: 2.99,
    },
    {
        name: "tea mug",
        price: 5.99,
    },
    {
        name: "beer glas",
        price: 7.99,
    },
    {
        name: "wine glas",
        price: 12.99,
    },
];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(listeOfProducts) {
    return listeOfProducts.reduce(function (acc, products) { return acc + products.price; }, 0);
}
console.log(getTotal(myInventar));
