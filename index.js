
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





function fCrearNickname (nombre, apellido1, apellido2){

nombre = prompt("¿Cuál es tu nombre?");
apellido1 = prompt("¿Cuál es tu primer apellido?");
apellido2 = prompt("¿Cuál es tu segundo apellido?");

const nombreCompleto = nombre  + ' ' + apellido1 + ' ' + apellido2;


let inicioNickname;
let primeraLetra;
let segundaLetra;

let palabras = nombre.split(' ');

if(palabras.length === 2){
  inicioNickname = palabras[0];
  primeraLetra = palabras[1].substring(0,1);
  segundaLetra = palabras[1].substring(1,2);

}else if(palabras.length === 1){
inicioNickname = nombre;
}



const nickname = inicioNickname + primeraLetra + segundaLetra + apellido1.substring(0,1) + apellido2.substring(0,1);

/*const nickname = nombre + apellido1.substring(0,1) + apellido2.substring(0,1);*/

document.write("Mi nombre es " + nombreCompleto +", y mi nickname es " + nickname.toLowerCase() + ".");

}

fCrearNickname();


/*El método substring() en JavaScript se utiliza para extraer una parte de una cadena de texto. Toma como argumentos los índices de inicio y fin y devuelve una nueva cadena que contiene los caracteres extraídos.

cadena.substring(inicio, fin);

Donde:

  cadena es la cadena de texto original de la cual quieres extraer una parte.
  inicio es el índice en el que comienza la extracción. Es un valor numérico y se basa en cero, lo que significa que el primer carácter tiene un índice de 0.
  fin es el índice en el que termina la extracción (no se incluye en el resultado final). Es opcional y si no se proporciona, se extraen todos los caracteres desde el índice de inicio hasta el final de la cadena.*/



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