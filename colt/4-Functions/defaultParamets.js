"use strict";
function greeting(age, person = "Larissa", isNice) {
    if (person === "Larissa" && age == 34 && isNice === true) {
        return `Hello ${person}`;
    }
    else {
        return "Bye bye";
    }
}
greeting(23, "Larissa", false);
