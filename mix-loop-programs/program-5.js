"use strict";
let num6 = 345;
let a = Number(prompt("Guess The Number"));
let b;
let count2 = 0;
while (a != num6) {
    a = Number(prompt("You Enter Wrong Number Enter The Number Again"));
    count2++;
}
console.log("Correct Number!");
console.log(`Attempts: ${count2 + 1}`);
