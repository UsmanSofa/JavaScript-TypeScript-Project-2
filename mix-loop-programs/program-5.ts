let num6:number = 345;
let a:number = Number(prompt("Guess The Number"));
let count2:number = 0;

while(a != num6){
    a = Number(prompt("You Enter Wrong Number Enter The Number Again"));
    count2++;
}
console.log("Correct Number!");
console.log(`Attempts: ${count2 + 1}`);
