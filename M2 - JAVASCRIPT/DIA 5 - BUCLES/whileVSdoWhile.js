/* RECORDAR QUE SI LA CONDICIÓN EN UN PRINCIPIO ES FALSE
EL DO WHILE IGUAL HARÁ EJECUCIÓN DEL CÓDIGO */

//Declarar una variable para guardar un número
let numero = 10;

//Usar un ciclo while para mostrar el número mientras sea menor que 5
console.log("Ciclo while:");
while (numero < 5) {
  console.log(numero);
  numero++;
}

//Reiniciar el número a otro valor
numero = 10;

//Usar un ciclo do while para mostrar el número mientras sea menor que 5
console.log("Ciclo do while:");
do {
  console.log(numero);
  numero++;
} while (numero < 5);
