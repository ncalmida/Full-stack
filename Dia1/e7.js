// npm init
// npm install prompt-sync

const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Introduce el primer numero: "));
let n2 = parseInt(prompt("Introduce el segundo numero: "));
let r = n1 + n2;

console.log(r)