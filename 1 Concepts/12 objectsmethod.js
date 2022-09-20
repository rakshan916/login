let employee={
empname : "vivek",
empid : 123,
job : "engineer",
basicsal: 50000,


bonus:
function calbonus()
{
return((this.basicsal*10)/100);
}


};


console.log(employee["empname"]); //acess employee name;
console.log(employee.bonus()); //calculated bonus;