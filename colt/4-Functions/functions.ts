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
