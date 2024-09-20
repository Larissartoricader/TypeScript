// void is a type of function that has not has a value for return. If you log the function, you will get an undefined, becuase no value comes out of this function

function getARandomNumber() {
  Math.random();
}

function getNewRandomNumber() {
  return Math.random();
}
