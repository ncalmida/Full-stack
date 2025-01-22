const prompt = require("prompt-sync")();

function calcularAreaCuadrado(alto, ancho) {

    if (alto === ancho) {
        return alto * ancho; 
    } else {
        return 'El alto y el ancho deben ser iguales para un cuadrado';
    }
}

console.log(calcularAreaCuadrado(5, 5)); 
console.log(calcularAreaCuadrado(5, 4));