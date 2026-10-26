let num5:number = 153;
let digit:number = 0;
let temp2:number = num5;
let count1:number = 0;
let sum:number = 0;

// Power loop
while(temp2 > 0){
    temp2 = (temp2 - (temp2 % 10)) / 10;
    count1++;
} 

temp2 = num5;

while(temp2 > 0){
    digit = temp2 % 10;
    sum = sum + digit ** count1; 
    temp2 = (temp2 - (temp2 %10)) / 10;
}

if(num5 === sum){
    console.log(`${num5} is an Armstrong Number`);
}else{
    console.log(`${num5} is not an Armstrong Number`);
    
}



