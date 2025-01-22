const prompt = require("prompt-sync")();

function saludar() {
    const nombre = prompt("¿Cómo te llamas?");
    
    console.log(`Hola ${nombre}`);
}

saludar();