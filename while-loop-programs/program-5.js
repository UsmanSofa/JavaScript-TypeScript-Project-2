"use strict";
let num = 98028;
let count = 0;
while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++;
}
console.log(`Digits in Number are:- ${count}`);
