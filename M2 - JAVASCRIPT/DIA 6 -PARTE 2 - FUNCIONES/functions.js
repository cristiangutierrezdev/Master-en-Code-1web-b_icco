/* ---------FUNCIONES------------------- */
/*  SINTAXIS BÁSICA
function miFuncion (argumento1,argumento2,...){   
    "bloque de código a ejecutar"
}  
 */

/* VARIABLES A UTILIZAR EN LA FUNCIÓN */
let num1 = 5;
let num2 = 6;
let num3 = 7;
let num4 = 8;

//DECLARO LA FUNCION

function suma(parametro1, parametro2) {
  let resultado = parametro1 + parametro2;
  return resultado;
}

function saludarPorConsola(nombre) {
  return console.log("Hola " + nombre);
}

//INVOCAR LA FUNCION
suma(115, 225);
suma("Hola ", "Lautaro");
suma(true, true);

saludarPorConsola("José");

/* INVOCAR LA FUNCIÓN Y ALMACENAR LO QUE RETORNA EN UNA VARIABLE */
let sumaPreferida = suma(num2, num4);
console.log(sumaPreferida);


/* ------------------------------------------------------------------------------- */
/* OJO!!EJEMPLO DE CÓDIGO MAL HECHO => La funcion saludarPorConsola retorna un console.log, el cual no se puede almacenar en una funcion, esto nos devolverá undefined */
let miSaludo = saludarPorConsola("José");
console.log(miSaludo);
/* ------------------------------------------------------------------------------- */

/* ----------EJEMPLO CON IF------------------------- */

let numeroAsignado = 11;

function mayorA10(numero) {
  if (numero > 10) {
    return "El número es mayor a 10";
  } else if (numero < 10) {
    return "El número es menor a 10";
  } else {
    return "El número es igual 10";
  }
}

let miRespuesta = mayorA10(numeroAsignado);
console.log(miRespuesta);
