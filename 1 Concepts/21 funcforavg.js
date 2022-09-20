function onePlusAvg(x,y)
{
console.log("Done") 
return Math.round( 1 + (x + y)/2) 
}

let a = 1;
let b = 2;
let c = 3;

console.log('average of a and b is ', onePlusAvg(a,b))
console.log('average of b and c is ', onePlusAvg(b,c))
console.log('average of c and a is ', onePlusAvg(c,a))