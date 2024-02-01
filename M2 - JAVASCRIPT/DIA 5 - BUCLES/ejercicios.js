/* ------------PARA PROBAR EN EL NAVEGADOR---------------------------------- */

//Escribir un programa que pida al usuario un número entre 1 y 10
//y luego muestre la tabla de multiplicar de ese número
//usando un ciclo while

//Pedir el número al usuario
let numero = Number(prompt("Ingrese un número entre 1 y 10: "));

//Validar que el número sea válido
while (numero < 1 || numero > 10 || isNaN(numero)) {
  //Mostrar un mensaje de error
  alert("Número inválido. Por favor, ingrese un número entre 1 y 10.");
  //Pedir otro número al usuario
  numero = Number(prompt("Ingrese un número entre 1 y 10: "));
}

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

