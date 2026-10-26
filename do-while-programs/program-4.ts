let numm:number = 16739;
let temp:number = 1;
let rev_number:number = 0;

do{
    temp = numm % 10;
    rev_number=  rev_number * 10 + temp;
    numm = (numm - (numm % 10)) / 10;
}while(numm > 0)
    console.log(`Reverse Number is:- ${rev_number}`);
    