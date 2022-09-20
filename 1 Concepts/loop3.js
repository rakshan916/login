let word = 'javascript';
let find = 'b';
let contian = false;

for(let search of word){
if(search===find){
    contian = true;
}
}

if(contian){ 
console.log('yes');
}
else{
console.log('no');
}