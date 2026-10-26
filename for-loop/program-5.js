"use strict";
let firstNumber = 0;
let n = 15;
let secondNumber = 1;
let sumOfNumber = 0;
console.log(firstNumber);
console.log(secondNumber);
for (let i = 2; i <= n; i++) {
    sumOfNumber = firstNumber + secondNumber;
    console.log(sumOfNumber);
    firstNumber = secondNumber;
    secondNumber = sumOfNumber;
}
