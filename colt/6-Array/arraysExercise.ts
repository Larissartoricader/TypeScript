// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const age: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [[]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

const myInventar = [
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

function getTotal(listeOfProducts: Product[]) {
  return listeOfProducts.reduce((acc, products) => acc + products.price, 0);
}

console.log(getTotal(myInventar));
