class Shape
{
draw()
{
return "I am generic shape";
}
}



class Square extends Shape{
draw()
{
return "I am Square"
}
}



class circle extends Shape{
draw()
{
return "I am circle"
}
}



let S=new Shape();
console.log(S.draw());

S= new Square();
console.log(S.draw());

S= new circle();
console.log(S.draw());

