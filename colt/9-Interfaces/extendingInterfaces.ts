//It is also possible to extend interface and reduce the amount and complexity of code by using already declared interface and extend it to other purposes.

interface Child {
  name: string;
  age: number;
}

const frida: Child = {
  name: "Frida",
  age: 2,
};

interface Toddler extends Child {
  canWalk: boolean;
  canEat: boolean;
  canTalk: boolean;
}

const Isabella: Toddler = {
  name: "Isabella",
  age: 2.5,
  canWalk: true,
  canEat: true,
  canTalk: true,
};

interface PreSchool extends Toddler {
  note: number;
  sayHello(): string;
}

const Alba: PreSchool = {
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
