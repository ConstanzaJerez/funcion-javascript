
/*platzi*/
/*function completeName (nombre, apellido){
    return nombre + ' ' + apellido
}

function saludo (nombre, apellido){
const nombreCompleto = completeName(nombre, apellido);
const nickname = nombre + apellido;

console.log("Mi nombre es " + nombreCompleto + ", y mi nickName es " + nickname + ".");
}


saludo('Constanza', 'Jerez Gutierrez');*/



function saludos (nombre, apellido1, apellido2){
  const nombreCompleto = nombre + ' ' + apellido1 + ' ' + apellido2;
  const nickname = nombre + apellido1.substring(0,1) + apellido2.substring(0,1)  ;  
  
  
  
  console.log("Mi nombre es " + nombreCompleto +", y mi nickName es " + nickname + ".");
  }
  
  
  saludos('Constanza', 'Jerez', 'Gutierrez');

  



  /*chatgpt*/
/*function palabras(str) {
    // Divide la cadena en palabras individuales
    let letras = str.split(" ");
  
    // Itera sobre cada palabra y capitaliza la primera letra
    for (let i = 0; i < letras.length; i++) {
      let combiLetra = letras[i];
      letras[i] = combiLetra.charAt(0).toUpperCase()+ combiLetra.slice(1) + combiLetra.charAt(combiLetra.length - 1) 
    }
    // Une las palabras capitalizadas en una cadena y devuelve el resultado
    return letras.join(" ");

  }

  // Ejemplo
  let texto = "hola mundo feliz";
  let resultado = palabras(texto);
  console.log(resultado); 
  // Salida: "Hola Mundo"*/