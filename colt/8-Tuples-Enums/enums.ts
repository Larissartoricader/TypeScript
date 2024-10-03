//Enums allows to define which kind of answers can be selected. It does not exist in JS, only in TS

enum PossibilitiesOfAnswers {
  no,
  yes,
  maybe,
}

const myStatusQuo = PossibilitiesOfAnswers.no;

function isMyAnswerYes(myAnswer: PossibilitiesOfAnswers) {
  if (myAnswer === PossibilitiesOfAnswers.maybe) {
    console.log("Maybe. It is maybe");
  } else if (myAnswer === PossibilitiesOfAnswers.yes) {
    console.log("Yes. Oh yes");
  } else if (myAnswer === PossibilitiesOfAnswers.no) {
    console.log("no. Oh no");
  }
}

isMyAnswerYes(myStatusQuo);

//Without any definition, JS will give to each answer possibily a value from 0 and increase by one, but it is possible to define by yourself which value you want to give to you answer possibility.

enum OrderStatus {
  PENDING = 100,
  DELIVERED = 200,
  LOST = 300,
  RETURNED = 400,
  ACCEPTED = 500,
}

// It is also possible to give strings as values.

// Enums is a great possibility to avoid condition written by strings. If you define the possibility of answers, you can use your Unem as a type for you values and limited the kind of answers that your variable can have.

enum Commands {
  ENTER = "Yes",
  SHIFT = "No",
  DELETE = "Maybe",
}

// Since the JS has to write way more code to cove the enum, there is a way to reduce the amount or code. When you write enum, write the word const behinde. This is way, you will still have the facility of TS, but with less code and readble code in Js.

const enum Feelings {
  Happy,
  Sad,
  Angry,
  Fear,
}

const myOwnFeeling = Feelings.Sad;

function readMyFeeling(feeling: Feelings) {
  if (feeling !== Feelings.Happy) {
    console.log("Happiness is a choice");
  }
}

readMyFeeling(myOwnFeeling);
