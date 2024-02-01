/* CICLO DO WHILE: Usamos la palabra reservada do, seguido del el código que se repetirá entre llaves {}, seguido de la palabra reservada while y finalmente la condición a evaluar en cada iteración entre paréntesis (). */
/* SINTAXIS BÁSICA => do { código a ejecutar } while (condición) */
let contador1 = 0;

do {
  contador1++;
  console.log("Conteo => " + contador1);
} while (contador1 < 10);

/* ---------PARA PROBAR POR CONSOLA---------------------- */

//Escribir un programa que pida al usuario un número entre 1 y 10
//y luego muestre la tabla de multiplicar de ese número
//usando un ciclo while

let numero = 15;
let contador = 1;

do {
  let producto = numero * contador;
  console.log(numero + " x " + contador + " = " + producto);
  contador++;
} while (contador <= 10);

/* -----------------------WHILE VS DO WHILE--------------------------------------------- */

//Declarar una variable para contar el número de iteraciones
let contador2 = 0;

//Usar un ciclo while para repetir un bloque de código mientras se cumpla una condición
console.log("Ciclo while:");
while (contador2 < 3) {
  //Mostrar el valor del contador
  console.log(contador2);
  //Incrementar el contador en uno
  contador2++;
}

//Reiniciar el contador a cero
contador2 = 0;//3

//Usar un ciclo do while para ejecutar un bloque de código al menos una vez y luego repetirlo mientras se cumpla una condición
console.log("Ciclo do while:");
do {
  //Mostrar el valor del contador
  console.log(contador2);
  //Incrementar el contador en uno
  contador2++;
} while (contador2 < 3);
