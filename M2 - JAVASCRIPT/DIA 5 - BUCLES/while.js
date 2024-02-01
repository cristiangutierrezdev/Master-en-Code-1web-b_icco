/* CICLO WHILE: Usamos la palabra reservada while, seguida de la condición entre paréntesis () y finalmente colocamos el código que se repetirá entre llaves {} */
// SINTAXIS BÁSICA => `while (condicion) { código a ejecutar}`

console.log("INICIO");

let index = 0;
while (index < 11) {
  index = index + 1;
  console.log(index);
  //index ++         //=>ES LO MISMO QUE DECIR index = index + 1
}

console.log("FIN");




/* ---------PARA PROBAR POR CONSOLA---------------------- */


//Escribir un programa que pida al usuario un número entre 1 y 10
//y luego muestre la tabla de multiplicar de ese número
//usando un ciclo while

//Pedir el número al usuario
let numero = 15

//Inicializar un contador para el multiplicador
let contador = 1;

//Mostrar la tabla de multiplicar del número usando un ciclo while
while (contador <= 10) {
  //Calcular el producto del número y el contador
  let producto = numero * contador;
  //Mostrar el resultado en la consola
  console.log(numero + " x " + contador + " = " + producto);
  //Incrementar el contador en uno
  contador++;
}