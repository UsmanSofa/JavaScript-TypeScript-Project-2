"use strict";
let num5 = 153;
let digit = 0;
let temp2 = num5;
let count1 = 0;
let sum = 0;
while (temp2 > 0) {
    temp2 = (temp2 - (temp2 % 10)) / 10;
    count1++;
}
temp2 = num5;
while (temp2 > 0) {
    digit = temp2 % 10;
    sum = sum + digit ** count1;
    temp2 = (temp2 - (temp2 % 10)) / 10;
}
if (num5 === sum) {
    console.log(`${num5} is an Armstrong Number`);
}
else {
    console.log(`${num5} is not an Armstrong Number`);
}
