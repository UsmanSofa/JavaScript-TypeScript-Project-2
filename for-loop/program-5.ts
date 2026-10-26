let firstNumber:number = 0;
let n:number =  15;
let secondNumber:number = 1;
let sumOfNumber:number = 0;
console.log(firstNumber);
console.log(secondNumber);
for(let i = 2; i < n;i++){
    sumOfNumber = firstNumber + secondNumber;
    console.log(sumOfNumber);
    firstNumber = secondNumber;
    secondNumber = sumOfNumber
}

