let num:number = 98028;
let count:number = 0;

while (num > 0) {
    num = (num - (num % 10)) / 10;
    count++;
}
console.log(`Digits in Number are:- ${count}`);
