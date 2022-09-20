/*create a method in the class, and then we create 
object of class,and access those methods throught the object*/

class Student
{
setDetails()   //this a method
// setDetails(sid,sname,grade)
{
//sid=101; // these veriable is limited to the method setDetail, not for class
//sname= "John";// these veriable is limited to the method setDetail, not for class
//grade="A";// these veriable is limited to the method setDetail, not for class

this.sid=101; //this.sid=sid
this.sname= "John"; // this.sname= sname
this.grade="A"; // this.grade=grade
} 

display()
{
console.log(this.sid,this.sname,this.grade);
}
}

//class is a logical entity
//to use the class, we need to use object
//to js to create object, first we have to create a variable

let stu= new Student();
stu.setDetails(); 
// stu.setDetails(101,"john","A")
stu.display();

/*this how we can create a method in the class, and we can create 
object of class,and access those methods throught the object*/


