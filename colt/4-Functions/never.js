"use strict";
// It's a way to block the possibility that a function return something. It can be used in a case of throw error.
//Without specifing this function has VOID type, but can lead to mistakes.
function makingError(msg) {
    throw new Error(msg);
}
//In this case becomes clear that this funcion can NOT return a value.
function makingErrorAgain(msg) {
    throw new Error(msg);
}
//Another exemple of using Never is for a function should not stop running. If the type never does not allow a return, the function does not finisch and keep running.
function neverStopRunningFunction() {
    while (true) {
        console.log("Running over and over again");
    }
}
