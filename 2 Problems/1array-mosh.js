//Encapsulation
//Normal way 
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function gateWage(){
//function gateWage(baseSalary,overtime,rate){
    
return baseSalary+(overtime*rate);
}

//console.log(gateWage(30,20,10));
console.log(gateWage());


//using OOPs
let employe ={
baseSalary:30000,
overtime:10,
rate:20,
gateWage: function(){

    return this.baseSalary+(this.overtime*this.rate);
}

}
employe.gateWage();
console.log(employe.gateWage());
//////////////////////////////////////



//Abstraction

