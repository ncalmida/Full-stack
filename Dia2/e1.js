function sumarNumeros(num1, num2) {
    return num1 + num2;
}
  
function restarNumeros(num1, num2) {
    return num1 - num2;
}
  
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
  
function dividirNumeros(num1, num2) {
    if (num2 !== 0) {
    return num1 / num2;
    } else {
    return "No se puede dividir por cero";
    }
}

const ps = require("prompt-sync");
const prompt = ps();
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var operacion = prompt("Seleccione la operación a realizar: suma, resta, multiplicación o división");



switch (operacion) {
    case "suma":
    alert("El resultado de la suma es: " + sumarNumeros(numero1, numero2));
    break;
    case "resta":
    alert("El resultado de la resta es: " + restarNumeros(numero1, numero2));
    break;
    case "multiplicación":
    alert("El resultado de la multiplicación es: " + multiplicarNumeros(numero1, numero2));
    break;
    case "división":
    alert("El resultado de la división es: " + dividirNumeros(numero1, numero2));
    break;
    default:
    alert("Operación no válida");
  }