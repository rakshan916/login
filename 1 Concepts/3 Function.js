//functions
/*syntax 
 function funcname(parameter1,parameter2)
{
//statement to be executed
}
*/
 


//example - passing values and printing in console
function add(a,b){
console.log(a+b);
}
//add(100,200);
console.log(add(100,200));
/////////////////////////


//ouside the function, just mentioning functinmae
{
let a=12, b= 5; 
{
function add(a,b){
    console.log(a+b);
    }
}
    add(a,b);
}
//////////////////////////



//example- funtion returning value
function add (a,b){
    return (a+b);
}
let returnvalue = add(50,30);
console.log(returnvalue);
///////////////////////



//example - function wont raking any arguement/parameter
function greeting()
{
    console.log("hey good morning");
}
greeting();
/////////////////



//example - retun value even if no argumens present
function greeting(){
    return  ("helloooo")
}
let msg=greeting(); //or console.log(greeting());
console.log(msg);  //or console.log(greeting());
//////////////////

