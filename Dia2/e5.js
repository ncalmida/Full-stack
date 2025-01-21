
const ps = require("prompt-sync");
const prompt = ps();
let num = prompt('ingresa un numero');

while(isNaN(num) || num == 0){

num = prompt('ingresa un numero');

}

let raiz = Math.sqrt(num);

if(raiz % 1 === 0){
  console.log('Raiz cuadrada perfecta');
}else{

console.log('no lo es');
}