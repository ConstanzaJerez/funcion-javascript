const nombre = "Constanza"
const apellido = "Jerez Gutierrez"
const nombreCompleto = nombre + apellido;
const nickname = "Conyjg"

function completeName (nombre, apellido){
    return nombre + ' ' + apellido
}

function saludo (nombre, apellido, nickname){
const nombreCompleto = completeName(nombre, apellido);

/*nombreCompleto = nombre + apellido[0] + nickname[0];*/


console.log("Mi nombre es " + nombreCompleto + ", pero prefiero que me digas " + nickname + ".");
}


saludo('Marcelo', 'Sepulveda Orellana', 'MarceloSO');



function palabras(str) {
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
  // Salida: "Hola Mundo"
  
 