/* FUNCIONES VS FUNCIONES FLECHA */

/* ES5 */
//Declaración tradicional de una función
function miSuma(num) {
  return num + num;
}
//Declaración de constante con función anonima
const miSuma2 = function (num) {
  return num + num;
};
/* ES6 */
const miSumaFlecha = (num) => num + num;
//Si tiene un parámetro, no es necesario poner paréntesis.
//Se puede omitir el return y las llaves {} si es una sola línea de programación después de la flecha.RETURN IMPLÍCITO

/* ------------------------------------------------------ */
/* ES5 */
function saludar() {
  return console.log("Hola!!");
}
/* ES6 */
const saludarFlecha = () => console.log("Hola!!");
//Cuando no existen parámetros se debe agregar los paréntesis antes de la flecha obligatoriamente.

/* -------------------------------- */
/* ES5 */
function generarUsuario(nombre, apellido) {
  return nombre + apellido;
}
/* ES6 */
const generarUsuarioFlecha = (nombre, apellido) => nombre + apellido;
//Si existen dos o más parámetros, se deben implementar los paréntesis obligatoriamente para encerrar los parámetros.

/* --------------------------------- */
/* ES5 */
function calcularMayor(num1, num2) {
  if (num1 > num2) {
    return num1 + "es mayor";
  } else {
    return num2 + "es mayor";
  }
}
/* ES6 */
const calcularMayorFlecha = (num1, num2) => {
  if (num1 > num2) {
    return num1 + "es mayor";
  } else {
    return num2 + "es mayor";
  }
};
//Si tengo mas de una línea de código despues de la flecha, debo utilizar {} y return
