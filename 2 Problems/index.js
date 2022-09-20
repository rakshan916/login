//console.log("hello world");

//object literals
/*const circle ={
radius:1,
location :{
x:1,
y:1
},
draw: function(){
    console.log('draw');
}
};

circle.draw();*/

//Factory function to create a object
function createCircle(radius){
    return {
    radius,
   draw:  function(){
    console.log('draw');
    }
   };
}
const circle = createCircle(1);   
circle.draw();

//construction function  to create a object
function Circle(radius){
this.radius=radius;
this.draw=function(){
    console.log("draw");
}
}
const another = new Circle(1);


//constorcvtor property
//funvtions are objects- confusiing
//purple-methods, blue-propeties
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
    }

    const Circle = new Function('radius',`
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }`);

    const ncircle = new Circle(1);
    const  nanother = new Circle(1);

