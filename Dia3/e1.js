const prompt = require("prompt-sync")();

function mostrarPares() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

mostrarPares();