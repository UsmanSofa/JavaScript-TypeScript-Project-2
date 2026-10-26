let num1:number = 67839;
let tempp:number = 0
let sumOfDigits:number = 0;

do{
    tempp = num1 % 10;
    sumOfDigits = sumOfDigits + tempp;
    num1 = (num1 - (num1 % 10)) / 10;

}while(num1 > 0)
console.log(`Sum of Digits:- ${sumOfDigits}`);

