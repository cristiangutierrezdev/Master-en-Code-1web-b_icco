/* Los Arreglos “son una manera ordenada” de almacenar una lista de elementos de datos bajo un solo nombre de variable, pudiendo acceder a cada elemento individual de la lista. */
let numeros = [1, 2, 3, 4, 5, 6];

let boleanos = [true, false, true, false];

let desorden = [true, 1, "!", [[["Hola123"]]]];

let alumnosWeb = ["Rodrigo", "Jessica", "José", "Sarina" /* undefined */];
//       index =     0           1          2      3             4  =>no existe!, undefined

let primerAlumno = alumnosWeb[0]; // el primer elemento del array siempre es en posición indice 0
let ultimoAlumno = alumnosWeb[alumnosWeb.length - 1]; // el ultimo elemento del array siempre es en posición array.length-1

// console.log(alumnosWeb[0]);
// console.log(alumnosWeb[1]);

/* --------------REDECLARAR UN ARRAY--------------------------- */
//Los arrays pueden redeclarar en sus valores , asignandoles el nuevo valor en la posición.

let frutas = ["Pera", "Manzana", "Platano", "Naranja"];

// console.log(frutas); //=> ["Pera", "Manzana", "Platano", "Naranja"];
/* Redeclaramos el valor de la posición del array */
frutas[2] = "Uva";
console.log(frutas[2]); //=>"Uva"
console.log(frutas); //=>  ["Pera", "Manzana", "Uva", "Naranja"];

/* --------------LARGO / LONGITUD DEL ARRAY  =>   .LENGTH     --------------------------- */
console.log(frutas.length); //=> longitud del array en este momento del código