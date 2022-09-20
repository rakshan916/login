//creating  constructors

class Student
{
//setDetails()   //this a method
constructor(sid,sname,grade)
{
//sid=101; // these veriable is limited to the method setDetail, not fr class
//sname= "John";// these veriable is limited to the method setDetail, not fr class
//grade="A";// these veriable is limited to the method setDetail, not fr class

this.sid=sid; //this.sid=sid
this.sname= sname; // this.sname= sname
this.grade=grade; // this.grade=grade
} 

display()
{

console.log(this.sid,this.sname,this.grade);

}

}

//class is a logical entity
//to use the class, we need to use object
//to js to create object, first we have to create a vsriable 


let stu1= new Student(101,"johgghn","A");//each object is independent 
stu1.display();

let stu2= new Student(102,"dfh","B"); //each object is independent 
stu2.display();

let stu3= new Student(103,"fggdfg","C");//each object is independent 
stu3.display();

let stu4= new Student(104,"ghfgf","D");//each object is independent 
stu4.display();

//stu.setDetails(); ///this is no need if there is a constructor
// stu.setDetails(101,"john","A")  /////this is no need if there is a constructor


/*this how we can create a method in the class, and we can create 
object of class,and access those methods throught the object*/




