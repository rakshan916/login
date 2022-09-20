let temp = 36;
//console.returnvalue(temp);

function celsiusToFahrenheit(){
return ((temp*1.8)+32);
}

console.log(" The celsius To Fahrenheit converted temperatue is ", celsiusToFahrenheit(), "F");


function fahrenheitToCelsius(){
 let fahrenheit;
  return (((celsiusToFahrenheit()-32)*5)/9); 
}

console.log("The Fahrenheit To celsius converted temperatue is", fahrenheitToCelsius(), "C");
