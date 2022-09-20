let person={
    firstname: "rakshan",
    lastname: "suvarna",
    age: 26,
    weight: 65
}


//accesing the object properties
console.log(person["firstname"]);//rakshan
//or we can also access using below statement
console.log(person.age);//26


//add new property to existing object
person["height"]=5;     //or person.height=5;
console.log(person.height);


//update existing property
person["weight"]= 70; //or person.weight=70;
console.log(person.weight);


//remove the property from the object
delete person["age"]; //or delete person;
console.log(person.age);


//print/itterate all property name at once
console.log('******looping objects*******');
for(let x in person)  //for/in loop
{
//console.log(x); //prints only property names
//console.log(person[x]); // this retuns he values of x in each loop
console.log(x+" "+person[x]); // this prints the name along with values
}


//acces methods from objects // funtion name is not mandatory here.
let employee={
empname:"rakshan",
empid: 143,
job: "tester",
basic: 50000,

bonus: function  bona()
{
    return((this.basic*10)/100)
} 
};   // function statement must end by semicoloumn
console.log(employee.empname) //rakshan
console.log(employee.bonus() ); //5000
////////////////////////////