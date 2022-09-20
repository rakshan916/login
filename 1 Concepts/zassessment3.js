/*let age = A;
let maxAge = 80;
let amountperday =B;

const prompt = require('prompt-sync')();
var A = prompt("enter your current age : ");
var B = prompt("enter your daily snack intake in gm : ");*/

function calculateSupply(age,amountperday){
    let maxAge = 100;
let totalNeed = (amountperday*365)*(maxAge - age);
console.log("You will need ",totalNeed,"gm"," to last you until the ripe old age of",maxAge);
}

calculateSupply(25,500);
