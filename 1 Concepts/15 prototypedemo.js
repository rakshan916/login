function students()
{
this.name="rax";
this.gender="male";
}

same= new students();
console.log(same.name,same.gender,same.age);


students.prototype.age=45;
stu1= new students();

// console.log(stu1.name);
// console.log(stu1.gender);
//stu1.age=35;

console.log(stu1.name,stu1.gender,stu1.age);

stu2= new students();
console.log(stu2.name,stu2.gender,stu2.age); // age is not created for stu2 object, so showing undefiend in o/p

//how to create a varible which is availale for all the objects


