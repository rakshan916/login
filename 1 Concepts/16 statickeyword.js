class test
{
static a=10; //static variable
b=20; // non-static variable


static m1()
{
console.log(" this is static method");
}

m2()
{
console.log("this m2 non static method");
}

}


/* 1) we can dorectly acces  static variable and 
method  using class name*/

console.log(test.a); //10 - static variable
//console.log(test.b); //undifind - because wqe cannot acces non-static variable directly through class.

test.m1(); //'this is static method' - static methods, we can directly acces
//test.m2(); // 'test.m2 is not a function' - we cannont direclty acces non static method through class.

//2) we can access non-static variable and methods using object

let t= new test();
console.log(t.b);
t.m2();
