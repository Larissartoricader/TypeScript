function greeting(age: number, person: string = "Larissa", isNice: boolean) {
  if (person === "Larissa" && age == 34 && isNice === true) {
    return `Hello ${person}`;
  } else {
    return "Bye bye";
  }
}

greeting(23, "Larissa", false);
