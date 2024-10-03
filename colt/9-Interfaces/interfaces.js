// Interface and Alias Type have similiar functions
//For Objects I can apply a type or interface as definition of the values in the key-properties.
var userX = {
    name: "Larissa",
    age: 36,
    isAdmin: true,
    adress: "A street, 2",
};
var userY = {
    name: "Larissa",
    age: 36,
    isAdmin: true,
    adress: "A street, 2",
};
var lulu = {
    id: 192,
    name: "lulu",
    age: 12,
    nickname: "lu",
    sayHi: function () {
        return "Hello, Lulu";
    },
    sayBye: function () {
        return "Bye, lulu";
    },
};
var redShoes = {
    name: "Mui Mui",
    price: 2334.23,
    applyDiscount: function (shoesDiscount) {
        var newPrice = this.price * (1 - shoesDiscount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(redShoes.applyDiscount(0.2));
