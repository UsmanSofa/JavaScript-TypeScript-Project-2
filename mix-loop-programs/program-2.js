"use strict";
let num4 = 123;
let orginalNumber = num4;
let revv_number = 0;
let temp1 = 0;
while (num4 > 0) {
    temp1 = num4 % 10;
    revv_number = revv_number * 10 + temp1;
    num4 = (num4 - (num4 % 10)) / 10;
}
if (revv_number === orginalNumber) {
    console.log(`Given Number is a Palindrome Number`);
}
else {
    console.log(`Given Number is not a Palindrome Number`);
}
