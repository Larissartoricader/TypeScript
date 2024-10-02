// It is possible to combine two or more alias type of objects into one. That helps to build the defition of the variable that we will declare:

type Dog = {
  name: string;
  age: number;
};

type Breed = {
  nameBreed: string;
  isRare: boolean;
};

type DogOwner = {
  ownerName: string;
  ownerAge: number;
  adress: string;
};

type DogProfile = Dog & Breed & DogOwner;

//Using DogProfil I can check if my variable fills all requiraments of the other alias type.

const myDog: DogProfile = {
  name: "Bob",
  age: 2,
  nameBreed: "chiauau",
  isRare: true,
  ownerName: "Andre",
  ownerAge: 2,
  adress: "Rua 3",
};

// I can also combine two or more types of Alias and also inser an keyproperty:

type Circle = {
  radius: number;
};

type Colors = {
  backgroundcolor: string;
  fillcolor: string;
  border: number;
};

// Emoji becomes one of the requirement of Smile even if it is not part of Circle or Colors.

type Smile = Circle &
  Colors & {
    emoji: string;
  };

const happySmile: Smile = {
  radius: 2,
  backgroundcolor: "pink",
  fillcolor: "white",
  border: 3,
  emoji: "happy",
};
