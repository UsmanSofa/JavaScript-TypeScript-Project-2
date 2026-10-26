for(let i = 1;i<=5;i++){
     let pattern: string = "";
    for(let k = 5; k >= i;k--){
        pattern += " ";
        
    }for(let j = 1;j<=i;j++){
         pattern += "* ";
        
    }
    console.log(pattern);
}