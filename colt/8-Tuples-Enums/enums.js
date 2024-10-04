"use strict";
//Enums allows to define which kind of answers can be selected. It does not exist in JS, only in TS
var PossibilitiesOfAnswers;
(function (PossibilitiesOfAnswers) {
    PossibilitiesOfAnswers[PossibilitiesOfAnswers["no"] = 0] = "no";
    PossibilitiesOfAnswers[PossibilitiesOfAnswers["yes"] = 1] = "yes";
    PossibilitiesOfAnswers[PossibilitiesOfAnswers["maybe"] = 2] = "maybe";
})(PossibilitiesOfAnswers || (PossibilitiesOfAnswers = {}));
const myStatusQuo = PossibilitiesOfAnswers.no;
function isMyAnswerYes(myAnswer) {
    if (myAnswer === PossibilitiesOfAnswers.maybe) {
        console.log("Maybe. It is maybe");
    }
    else if (myAnswer === PossibilitiesOfAnswers.yes) {
        console.log("Yes. Oh yes");
    }
    else if (myAnswer === PossibilitiesOfAnswers.no) {
        console.log("no. Oh no");
    }
}
isMyAnswerYes(myStatusQuo);
//Without any definition, JS will give to each answer possibily a value from 0 and increase by one, but it is possible to define by yourself which value you want to give to you answer possibility.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 100] = "PENDING";
    OrderStatus[OrderStatus["DELIVERED"] = 200] = "DELIVERED";
    OrderStatus[OrderStatus["LOST"] = 300] = "LOST";
    OrderStatus[OrderStatus["RETURNED"] = 400] = "RETURNED";
    OrderStatus[OrderStatus["ACCEPTED"] = 500] = "ACCEPTED";
})(OrderStatus || (OrderStatus = {}));
// It is also possible to give strings as values.
// Enums is a great possibility to avoid condition written by strings. If you define the possibility of answers, you can use your Unem as a type for you values and limited the kind of answers that your variable can have.
var Commands;
(function (Commands) {
    Commands["ENTER"] = "Yes";
    Commands["SHIFT"] = "No";
    Commands["DELETE"] = "Maybe";
})(Commands || (Commands = {}));
const myOwnFeeling = 1 /* Feelings.Sad */;
function readMyFeeling(feeling) {
    if (feeling !== 0 /* Feelings.Happy */) {
        console.log("Happiness is a choice");
    }
}
readMyFeeling(myOwnFeeling);
