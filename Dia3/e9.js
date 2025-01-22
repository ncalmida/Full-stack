const prompt = require("prompt-sync")();

function calcularAreaTrianguloRecto(base, altura) {
    return (base * altura) / 2;
}

console.log(calcularAreaTrianguloRecto(5, 8)); 
console.log(calcularAreaTrianguloRecto(7, 3));