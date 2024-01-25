/* --------SINTAXIS IF BÁSICA--------------------------------- */
//if ("condicion") {"Código a ejecutar"}      => sintaxis básica
if (15 > 25) {
  console.log("quince es mayor a 5");
}

/* Crear una condición para que si tienes 18 años ó mas puedas ingresar a la disco. */
/* La edad al ser ingresada por un prompt , se guardará como string ("28"), con el métdo Number(), lo convertiré a un tipo de dato Número/Number (28) */

let edad = prompt(
  "BIENVENIDO A LA DISCOTECA! , POR FAVOR INGRESE SU EDAD ANTES DE CONTINUAR"
); //=> ME PERMITE ESCRIBIR EN EL NAVEGADOR EL VALOR DE LA VARIABLE EN FORMATO STRING

if (Number(edad) >= 18) {
  console.log("La condición se cumplió");
  alert("Usted puede ingresar, Gracias por venir!");
}

