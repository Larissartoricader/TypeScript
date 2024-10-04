"use strict";
// If you insert the possibility of a value be a number or string, you need to cover both possible situation if you want to user any method that applies only for one or other kind of values, otherwise TS will complain about the possibility to apply a number method for a possible string value. That is what narrowing Union Type does: It prevents the possibility that the wrong method be apply for the wrongh value.
function calculateTax(price, tax) {
    if (typeof price === "string") {
        const newPrice = price.replace("$", "");
        const newPriceInNumber = parseFloat(newPrice);
        return newPriceInNumber / tax;
    }
    return price / tax;
}
console.log(calculateTax(19, 0.2));
console.log(calculateTax("$4", 2));
// typeof checks which type the value is and we can decide what to do
