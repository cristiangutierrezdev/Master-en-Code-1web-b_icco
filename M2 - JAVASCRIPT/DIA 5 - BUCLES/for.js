/* BUCLE FOR */
/* 1 */
console.log("INICIO DEL 1");
let contador = 0; // 0  1  2 3 4 5 6 7 8 9 10
// i => 0 1 2 3 4 5 6 7 8 9 10
for (let i = 0; i < 10; i++) {
  contador++;
  console.log(contador);
}
console.log("FIN DEL 1");
/* 2 */
console.log("--------------------------------------------");
console.log("INICIO DEL 2");

let alumnos = [
  "Liz",
  "Jose",
  "Rodrigo",
  "Jezabel",
  "Jhon",
  "Christel",
  "Sarina",
  "Romay",
];

for (let i = 0; i < alumnos.length; i++) {
  let element = alumnos[i];
  console.log("Hola " + element);
}

console.log("FIN DEL 2");
