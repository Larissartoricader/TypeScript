// Alias is the definition of types for objects before we even write the values of the objects. It is like a definition, how th object should be declare when it happens.

type Person = {
  name: string;
  age: number;
  isHappy: boolean;
  adresse: string;
};

// Now I can user Person a TYPE for my code. I do not need to specify every single type of key, because this information is already declared inside the new created type Person, an Alias Type of TS.

let larissa: Person = {
  name: "Larissa",
  age: 37,
  isHappy: false,
  adresse: "Fruchtalle, 3",
};

//Person becomes my own default for future objects.
