class student
{

    constructor()  //initiacte the variable 
{
let name,marks;
}


getName()   //getters and setters
{
    return this.name;
}
setName(name)  //getters and setters
{
this.name=name;
}

getMarks()  //getters and setters
{
return this.marks;
}
setMarks(marks)  //getters and setters
{
this.marks=marks;
}



}

let stu=new student();
stu.setName("rax");
stu.setMarks(85);


console.log(stu.getName(), stu.getMarks());
