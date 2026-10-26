let num4:number = 123;
let orginalNumber:number = num4;
let revv_number:number = 0;
let temp1:number = 0

while(num4 > 0){
    temp1 = num4 % 10;
    revv_number = revv_number * 10 + temp1
    num4 = (num4 - (num4 % 10)) / 10;
}
if(revv_number === orginalNumber){
    console.log(`Given Number is a Palindrome Number`);
}else{
    console.log(`Given Number is not a Palindrome Number`);
}