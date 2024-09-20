function square(num1: number) {
  return num1 * num1;
}

square(2);

function greeting(person: string): string {
  return `Hello ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Larissa", 32, true);

//For function you can definde the type of parameter

function getMeANumber(): number {
  return Math.random();
}

//Or a function can return different kind os returns (ex. number OR string)

function random(): string | number {
  const randomNumber = Math.random();
  if (randomNumber >= 0.5) {
    return randomNumber.toString();
  } else {
    return randomNumber;
  }
}

// it works also for anonymous function

const add = (x: number, y: number): number => {
  return x + y;
};
