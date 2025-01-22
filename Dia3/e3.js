const prompt = require("prompt-sync")();

function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numero = parseInt(prompt("Introduce un número:"));
mostrarTablaMultiplicar(numero);