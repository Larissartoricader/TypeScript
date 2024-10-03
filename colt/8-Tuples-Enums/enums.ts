//Enums allows to define which kind of answers can be selected

enum Answers {
  no,
  yes,
  maybe,
}

const statusQuo = Answers.maybe;

function isAnswerYes(myAnswer: Answers) {
  if (myAnswer === Answers.maybe) {
    console.log("Maybe");
  }
  if (myAnswer === Answers.yes) {
    console.log("Yes");
  }
  if (myAnswer === Answers.no) {
    console.log("no");
  }
}

isAnswerYes(statusQuo);
