/* array es una coleccion de datos/elementos */
const nombres = [
  "Ana",
  "Juan",
  "María",
  "Pedro",
  "Sofía",
  "Tomás",
  "Camila",
  "Santiago",
  "Valentina",
  "Mateo",
];

for (let i = 0; i < nombres.length; i++) {
  const nombre = nombres[i];//elemento
  console.log(`Hola ${nombre}! Usted adeuda una boleta del mes pasado.`)
}

/* FOR EACH => El método forEach() ejecuta la función indicada una vez por cada elemento del array.*/
nombres.forEach((nombre) =>
  console.log(`Hola ${nombre}! Usted adeuda una boleta del mes pasado.`)
);

/* MAP => puedo guardar el los valores que devuelven dentro de una variable en un array nuevo--
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

let nuevoArray = nombres.map(
  (nombre) => `Hola ${nombre}! Usted adeuda una boleta del mes pasado.`
);
let nuevoArray2 = nombres.map((nombre) => {
  return { alias: nombre, edad: 25 };
});

console.log(nuevoArray);
console.log(nuevoArray2);
