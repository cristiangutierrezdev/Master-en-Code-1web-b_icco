/* CONCATENACIÓN VS INTERPOLACIÓN */

let nombre = "Jorge";
let apellido = "Garcia";
/* ES5 */
let saludo = "Hola " + "soy " + nombre;
let saludo2 = "Hola" + " " + "soy" + " " + nombre;

/* ES6 */
let saludoInterpol = `Hola soy ${nombre} ${apellido}`;

/* 
La interpolación es una nueva manera de agrupar las variables en una cadena 
    Se debe poner la cadena de texto a interpolar entre `` (backtic ó acento grave) 
    y al momento de querer nombrar una variable, la pongo  ${aqui}
*/

console.log(saludo);
console.log(saludo2);
console.log(saludoInterpol);
