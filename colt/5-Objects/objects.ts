const onePerson = {
  name: "Larissa",
  lastName: "Sartori",
  age: 37,
};
// How to define a paramete as object

function newPrintName(person: object) {
  console.log(person);
}

newPrintName(onePerson);

// I can also dfine

function printName(person: { name: string; lastName: string }) {
  console.log(`${person.name} ${person.lastName}`);
}

printName(onePerson);
