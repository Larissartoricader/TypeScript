"use strict";
// Interface and Alias Type have similiar functions
//For Objects I can apply a type or interface as definition of the values in the key-properties.
const userX = {
    name: "Larissa",
    age: 36,
    isAdmin: true,
    adress: "A street, 2",
};
const userY = {
    name: "Larissa",
    age: 36,
    isAdmin: true,
    adress: "A street, 2",
};
const lulu = {
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
const redShoes = {
    name: "Mui Mui",
    price: 2334.23,
    applyDiscount(shoesDiscount) {
        const newPrice = this.price * (1 - shoesDiscount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(redShoes.applyDiscount(0.2));
const paul = {
    name: "Paul",
    age: 34,
    departament: "Port",
    admissionYear: 2002,
};
// Now my object fullfills all requirements of my interface.
