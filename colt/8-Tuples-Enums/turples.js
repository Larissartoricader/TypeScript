"use strict";
// Tuples do not exist in JS, only in TS. Turple is an array with a specif order of values types.
const colorRGB = [123, 232, 234]; // I habe not only to insert numbers, but three numbers to reach the requirement of this array.
const goodResponse = [200, "Good"];
const badResponse = [400, "Not Founded"];
badResponse.push(233); //TS does not complain If I try to push another number if it is now allowed by me type. - TS LImitation!
