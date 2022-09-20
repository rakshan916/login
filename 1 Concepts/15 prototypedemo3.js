class Employee
{
constructor(eid, ename)
{
this.eid=eid;
this.ename=ename;

}

}

Employee.prototype.sal=50000;


Employee.prototype.display=function()
{
console.log(this.eid,this.ename,this.sal);
}

emp1obj = new Employee(101,"raxxx");
//console.log(emp1obj.eid,emp1obj.ename, emp1obj.sal);

emp1obj.display();


emp2obj = new Employee(102,"vivek");
// console.log(emp2obj.eid,emp2obj.ename, emp2obj.sal);
emp2obj.display();
