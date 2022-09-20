//basic declaration and initializing
var a = 10;
let b = 20;
const c = 30;

let p = (a+b+c)*2 ; 

console.log('The result of p is', p);
console.log('Done');
/////////////////////////////


//checking for block access of variables
{
let x= 5
y= 6
const z= 7

final = x+y+z ;
console.log(final);
}
//console.log(final);
//////////////////////



//defining objects
const item = {
    Harry : true,
    rax : false,
    pramith : 50,
    vivek : undefined
}
console.log(item["rax"])
console.log(item.pramith);
//////////////////////



//functions - used to organize the codes, insted of writing same code multiple times.
//without using functions
{
let aa = 1 ;
let bb = 2 ;
let cc = 3 ;

console.log('average of aa and bb is', (aa+bb)/2)
console.log('Done')
console.log('average of bb and cc is', (bb+cc)/2)
console.log('Done')
console.log('average of cc and aa is', (cc+aa)/2)
console.log('Done')
}

//with using functions
function average(xx,yy){
    console.log('Done')
    return Math.round((xx+yy)/2)
}

let aa = 1 ;
let bb = 2 ;
let cc = 3 ;

console.log('average of aa and bb is', average(aa,bb))
console.log('average of aa and bb is', average(bb,cc))
console.log('average of aa and bb is', average(cc,aa))
//////////////////////////



//Operatos
//arithmatic operators  + - *  / % ++ -- 
let aaa=10, bbb=30;

console.log(aaa+bbb)
console.log(aaa-bbb)
console.log(aaa*bbb)
console.log(aaa/bbb)
console.log(aaa%bbb)
console.log(aaa**bbb)


//aaa = aaa+1
aaa++; // x++  post-increment // ++x  pre-increment
console.log(aaa);

///aaa=aaa-1
aaa--; 
console.log(aaa);
//////////////////////////



// assignment operators  = , +=, -= , *=, /=, %=
aaa+=bbb;
console.log(aaa);
/////////////////////////



//retational or comparison operator <, >, <=, >=
console.log(aaa>bbb);
//////////////////////



//termnary operator
{
let a= 10,b=20
console.log(a<b?a:b) ///if the consdition is tre, then returns the first ratio valiue, ifn not 2nd ratio value
console.log(a>b?a:b)
}
//////////////////////////



//logical operator &&, ||, !
{
let a =true;
let b=false;
console.log(a && b);
console.log(a || b);
console.log(! b);
}
///////////////////////////////