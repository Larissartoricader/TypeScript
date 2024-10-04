"use strict";
//In this case you do not need to specify which kind of variable are in the anonymous function, because TS can identify it from the array. So the anonymous function will allow only methods that can be used do this identified type of variable.
const colors = ["red", "orange", "green", "blue"];
colors.map((color) => {
    return color.toUpperCase();
});
// In this case the new function can not be related to the previous array. So the "color" has a any type for now. Even if we know that should be a string, Ts allows me here to use a number method, because in a new function is NOT clear that color is a string from the array. In this case, I should specify that color is a string.
function getAColor(color) {
    return color.Math.round();
    //TS allows me a to make a mistake by using a number method in a parameter that is a string.
}
