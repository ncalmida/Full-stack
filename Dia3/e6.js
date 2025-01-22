const prompt = require("prompt-sync")();

function esParOImpar(numero) {
    if (numero % 2 === 0) {
      console.log("El número es par.");
    } else {
      console.log("El número es impar.");
    }
  }
  
  esParOImpar(5); 
  esParOImpar(8)