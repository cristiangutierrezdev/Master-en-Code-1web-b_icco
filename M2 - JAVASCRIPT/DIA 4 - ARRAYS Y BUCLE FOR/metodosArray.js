let frutas = ["Pera", "Manzana", "Platano", "Naranja", "Uva"];
console.log("Cuantas frutas tengo? =>", frutas.length);

/* --------METODOS QUE MODIFICAN EL ARRAY ORIGINAL------------------------------------------------------- */
/* .push("valor a agregar") => agrego un elemento al final del array => se le dice "pushear"  */
let frutaNueva = "Melon";
frutas.push(frutaNueva);
console.log(frutas);

/* .pop() => elimino el último elemento del array  */
frutas.pop();
console.log(frutas);

/* .unshift("valor a agregar")  =>  El método unshift agrega un ítem al principio de la lista.  */
frutas.unshift("Melon");
frutas.unshift("Sandia");
console.log(frutas);

/* .shift()  =>  El método shift elimina el ítem que está al principio de la lista. */
frutas.shift();
console.log(frutas);

/* --------------------METODOS QUE DEVUELVEN UN ARRAY MODIFICADO -------------------------------------------- */
//let frutas = ["Pera", "Manzana", "Platano", "Naranja", "Uva"];

/* .slice("inicio","opcional: final") => Quita una parte de un array y devolverlo en un nuevo array. */
//Debe indicarse al menos una posición inicial (start). La posición inicial es 0.
//Opcionalmente también se puede indicar una posición final (end).
let ultimasFrutas = frutas.slice(3);
console.log(ultimasFrutas);

let primerasFrutas = frutas.slice(0, 2);
console.log(primerasFrutas);

/* .concat("array a agregar") => Este método une (concatena) el contenido de 2 arreglos existentes. No modifica dichos arreglos, si no que devuelve uno nuevo. */
let otrasFrutas = ["Damasco", "Tomate", "Quinoto"];
let todasLasFrutas = frutas.concat(otrasFrutas)

/* .sort() =>  Ordena la lista de forma ascendente (A-Z) por defecto. */
let frutasOrdenadas = frutas.sort()

/* .reverse() => Coloca los elementos del arreglo al revés. ¡¡¡¡¡Este método ALTERA EL ARREGLO ORIGINAL!!!!!. */
let frutasInvertidas = frutas.reverse();
console.log(frutasInvertidas);
