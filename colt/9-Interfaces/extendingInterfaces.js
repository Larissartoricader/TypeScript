"use strict";
//It is also possible to extend interface and reduce the amount and complexity of code by using already declared interface and extend it to other purposes.
const frida = {
    name: "Frida",
    age: 2,
};
const Isabella = {
    name: "Isabella",
    age: 2.5,
    canWalk: true,
    canEat: true,
    canTalk: true,
};
const Alba = {
    name: "Alba",
    age: 4,
    canWalk: true,
    canEat: true,
    canTalk: true,
    note: 2,
    sayHello() {
        return `Hello, I'm Alba`;
    },
};
