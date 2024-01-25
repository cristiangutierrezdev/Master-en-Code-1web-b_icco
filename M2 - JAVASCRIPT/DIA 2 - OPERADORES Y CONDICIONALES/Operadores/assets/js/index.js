/* -----------------------OPERADORES MATEMÁTICOS------------------------- */
/* Las operaciones matemáticas arrojan un valor de salida único */
let numeroFavorito = 22;
let suma = numeroFavorito + 2; //24
let resta = 5 - 5; // 0
let multipliacion = 5 * 5; //25
let division = 25 / 5; //5
let residuoDeDivison = 25 % 5; // 25/5 => 0 sin resto
let esPar = 3 % 2; /* Si da 0 es par, sino es impar */
let potencia = 2 ** 3; // 8

/* -----------------------OPERADORES RELACIONALES------------------------- */

/* Menor que=> compara si el valor izquierdo es menor que el derecho */
let menorQue = 5 < 10; //true
let esMenorQue = 5 < 5; //false

/* Mayor que=> compara si el valor izquierdo es mayor que el derecho */
let mayorQue = 5 > 10; //false
let esMayorQue = 10 > 10; //false

/* Menor o igual que=> compara si el valor izquierdo es menor o igual que el derecho */
let menorOIgualQue = 5 <= 10; //true
let esMenorOIgualQue = 5 <= 5; //true

/* Mayor o igual que=> compara si el valor izquierdo es mayor o igual que el derecho */
let mayorOIgualQue = 5 >= 10; //false
let esMayoroIgualQue = 10 >= 10; //true

/* Igualdad => compara si los dos valores son iguales, sin importar el tipo de dato */
let sonIguales = 5 == 5; //true
let sonIguales2 = "5" == "5"; // true
let sonIguales3 = 555 == "456"; // false
let sonIguales4 = 555 == "555"; // true
let sonIguales5 = "555" == 555; // true
let sonIguales6 = "Lautaro" == "lautaro"; //false

/* Igualdad ESTRICTA => compara si los dos valores son iguales, IMPORTA el tipo de dato */
let sonIgualesEstricto = 5 === 5; //true
let sonIgualesEstricto2 = 5 === "5"; //false
let sonIgualesEstricto3 = 555 === "456"; // false
let sonIgualesEstricto4 = 555 === "555"; // false
let sonIgualesEstricto5 = "555" === 555; // false
let sonIgualesEstricto6 = "Lautaro" === "lautaro"; //false

/* No igualdad estricta /No son iguales estricto=> devuelve true si NO SON IGUALES, COMPARA TIPO DE DATO*/
let noSonIgualesEstricto = 5 !== 5; //false
let noSonIgualesEstricto2 = 5 !== "5"; //true
let noSonIgualesEstricto3 = 555 !== "456"; // true
let noSonIgualesEstricto4 = 555 !== "555"; // true
let noSonIgualesEstricto5 = "555" !== 555; // true
let noSonIgualesEstricto6 = "Lautaro" !== "lautaro"; //true

let num1 = 15;
let num2 = 20;
let prueba = num1 + num2 >= num2;
//            15 +20         20
//             35           20
//               35 >= 20 //true

/* --------------TYPE OF------------------------------------------------ */
let saludo = "Hola";
let nombre = "lautaro";
let edad = 28;

let tiposIguales = typeof saludo === typeof nombre; //true
//                   typeof "Hola"         typeof "lautaro"
//                      "string"               "string"
//                          "string" === "string"
//                                   true

let tiposIguales2 = typeof saludo === typeof edad; //false
let tiposIguales3 = typeof "Hola" === typeof 25; //false
//                   string       ===     number

/* -----OPERADORES LÓGICOS-------------------------------------------------------------- */
//Operador AND => se hace con un doble &  => && => si todas las condiciones se cumplen, se arroja true

let ejemplo1 = 5 > 5 && 10 > 10;
//              false  &&    false  => false

let ejemplo2 = true && 10 === 10;
//             true &&   true    => true

let ejemplo4 = "Lautaro" === "Lautaro" && 25 === 25;
//              true                 &&   true    => true

//Operador OR => se hace con doble | => || => si una u otra se cumple, da como resultado true

let ejemplo3 = 5 > 5 || 10 === 10;

let probando = null && undefined;
//            false && false

console.log(probando);
