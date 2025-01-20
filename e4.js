function dibujarCuadrado(lados) {
    let result = '';
  
   
    for (let i = 0; i < lados; i++) {
      result += '* ';
    }
    
    result += '\n';
  
    
    for (let i = 0; i < lados - 2; i++) {
      result += '*';
      for (let j = 0; j < lados + lados - 3; j++) {
        result += ' ';
      }
      result += '*\n';
    }
  
    
    for (let i = 0; i < lados; i++) {
      result += '* ';
    }
    
    return result;
  }
  

console.log(dibujarCuadrado(5));

