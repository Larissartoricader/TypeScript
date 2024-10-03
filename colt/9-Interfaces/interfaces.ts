// Interface and Alias Type have similiar functions

type myUser = {
  name: string;
  age: number;
  isAdmin: boolean;
  adress: string;
};

//Interface is a own created type for objects. Interface can not be apply for Union-type.
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  adress: string;
}

//For Objects I can apply a type or interface as definition of the values in the key-properties.

const userX: User = {
  name: "Larissa",
  age: 36,
  isAdmin: true,
  adress: "A street, 2",
};

const userY: myUser = {
  name: "Larissa",
  age: 36,
  isAdmin: true,
  adress: "A street, 2",
};

//like in type it is possible also to use readonly or ? as optional like in type. BUT in Interfaces you can also create a methode for you object type

interface Pet {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;
  sayHi: () => string;
  sayBye(): string;
}

const lulu: Pet = {
  id: 192,
  name: "lulu",
  age: 12,
  nickname: "lu",
  sayHi: () => {
    return "Hello, Lulu";
  },
  sayBye: () => {
    return "Bye, lulu";
  },
};

// You can create a methode as arrow function and use it inside the interface in an object:

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const redShoes: Product = {
  name: "Mui Mui",
  price: 2334.23,
  applyDiscount(shoesDiscount: number) {
    const newPrice = this.price * (1 - shoesDiscount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(redShoes.applyDiscount(0.2));
