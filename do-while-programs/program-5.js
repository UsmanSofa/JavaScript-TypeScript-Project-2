"use strict";
let num1 = 67839;
let tempp = 0;
let sumOfDigits = 0;
do {
    tempp = num1 % 10;
    sumOfDigits = sumOfDigits + tempp;
    num1 = (num1 - (num1 % 10)) / 10;
} while (num1 > 0);
console.log(`Sum of Digits:- ${sumOfDigits}`);
