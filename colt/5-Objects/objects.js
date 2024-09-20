var onePerson = {
    name: "Larissa",
    lastName: "Sartori",
    age: 37,
};
// How to define a paramete as object
function newPrintName(person) {
    console.log({ person: person });
}
newPrintName(onePerson);
// I can also dfine
function printName(person) {
    console.log("".concat(person.name, " ").concat(person.lastName));
}
printName(onePerson);
