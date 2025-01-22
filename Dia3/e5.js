const prompt = require("prompt-sync")();
function contieneS(cadena) {
  
  if (cadena.includes('s') || cadena.includes('S')) {
    return true;
  } else {
    return false;
  }
}

console.log(contieneS("Hola, ¿cómo estás?")); 
console.log(contieneS("Buenos días")); 
console.log(contieneS("Hola")); 