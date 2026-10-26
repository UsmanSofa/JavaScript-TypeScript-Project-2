"use strict";
let num = Number(prompt("Enter The Value of N"));
let sum = 0;
let i = 0;
while (i <= num) {
    sum += i;
    i++;
}
console.log(`Sum of N Natural Numbers: ${sum}`);
