//the Any type. Any as type allows any kind of type and also any method

let thing: any = "Hello";

thing = 0;
thing.toStringfy;

const movies = ["Mamma Mia", "Evita", "The Greatest Showman"];
let foundMOvie: string;

for (let movie of movies) {
  if (movie === "Mamma Mia") {
    foundMOvie = "Mamma Mia";
  }
}
