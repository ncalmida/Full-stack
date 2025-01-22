const prompt = require("prompt-sync")();

function saludar(nombre) {
    console.log("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor escribe tu nombre");
    
    callback(nombre);
}

procesarEntradaUsuario(saludar);