/* 1- Crea una condición que devuelva true/"El numero es entero" si el número es entero , de lo contrario devuelve false/"EL numero no es entero" , puedes utilizar console.log para ver la respuesta en consola.*/
console.log("--------------------Ejercicio1---------------");

let numero = 5.5;

if (numero % 1 === 0) {
  console.log(true, "El numero ES entero=>", numero);
} else {
  console.log(false, "El numero no es entero=>", numero);
}

/* 2- Devuelve "true" si "numero" es menor que 50 y mayor que 20; De lo contrario, devuelve "false"
   Pista: debes usar && */
console.log(
  "--------------------Ejercicio2: Devuelve true si numero es menor que 50 y mayor que 20---------------"
);

let numero2 = 31;

if (numero2 > 20 && numero2 < 50) {
  console.log(true, "El numero cumple la condicion=>", numero2);
} else {
  console.log(false, "El numero NO cumple la condicion=>", numero2);
}

/* 3- Escribe un programa que pregunte al usuario su nota en un examen. En función de la nota, el programa debe mostrar un mensaje.
Por ejemplo, si el usuario saca un 10, el mensaje podría ser "Excelente". Si el usuario saca un 9 o un 8, el mensaje podría ser "Muy bien". Si el usuario saca un 7 o un 6, el mensaje podría ser "Bien". Si el usuario saca un 5 o un 4, el mensaje podría ser "Suficiente". Y si el usuario saca un 3 o un 2 o menos, el mensaje podría ser "Insuficiente". */
