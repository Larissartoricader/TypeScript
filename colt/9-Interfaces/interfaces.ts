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

//like in type it is possible also to use readonly or ? as optional like in type. You can create a METHOD as an arrow function and use it inside the interface in an object. In the interface I can specify what kind of return this method should return.

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

// You can also add a parameter to your arrow function and also define what kind type this parameter should be:

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

// One of the most value function of interface is the possibility to reopen it and edit it, withou rewritten it. Once you define your interface and the requirements of your object, it is possible to reopen and insert more requirement.

interface Employee {
  name: string;
  age: number;
  departament: string;
}

// const paul: Employee = {
//   name: "Paul",
//   age: 34,
//   departament: "Port",
// };

// As soon a insert a new key-property as requirment to this object, TS shows my the my previous define Object is missing one key-property

interface Employee {
  admissionYear: number;
}

const paul: Employee = {
  name: "Paul",
  age: 34,
  departament: "Port",
  admissionYear: 2002,
};

// Now my object fullfills all requirements of my interface.
