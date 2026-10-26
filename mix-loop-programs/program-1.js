"use strict";
let num3 = 6;
let countt = 0;
for (let i = num3; i > 0; i--) {
    if (num3 % i == 0) {
        countt++;
    }
}
if (countt++ <= 2) {
    console.log(`${num3} is Prime Number`);
}
else {
    console.log(`${num3} is not a Prime Number`);
}
