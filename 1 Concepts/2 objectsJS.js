let person =
{
firstname : "rakshan",
lastname : "kumar",
age : 26,
weight : 65 
}

//Accessing Object properties

//console.log(person["lastname"]);  // kumar
// console.log(person.age);  // 26

//adding property to existing object
//person["height"]= 6.1;
person.height=6.1;
console.log(person["height"]);

//update existing property
person["weight"]= 66;
console.log(person.weight);

//remove the property from the object
delete person["age"];
console.log(person["age"]);

//fo/in loop - itterate  each andf every property from the object
console.log("**********looping objects************")
for(let x in person)
{
    //console.log(x);  //prints only propery names
    //console.log(person[x]);  //prints only value of property
    console.log(x+ " " + person[x]); // value with parameters retuned

}
