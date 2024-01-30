let frutas = ["Pera", "Manzana", "Platano", "Naranja", "Uva"];
console.log("Cuantas frutas tengo? =>", frutas.length);
/* PUSH() => agrego un elemento al final del array => se le dice "pushear"  */

let frutaNueva = "Melon";

frutas.push(frutaNueva);

console.log(frutas);
console.log("Cuantas frutas tengo? =>", frutas.length);

/* POP() => elimino el último elemento del array  */

frutas.pop();
console.log(frutas);
console.log("Cuantas frutas tengo? =>", frutas.length);
