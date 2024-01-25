/* --------SINTAXIS IF /ELSE ANIDADOS--------------------------------- */
let semaforo = prompt("ESCRIBE EL COLOR DEL SEMÁFORO");

if (semaforo === "amarillo") {
  alert("FRENAR CON PRECAUCIÓN");
} else if (semaforo === "verde") {
  alert("AVANZAR!");
} else if (semaforo === "rojo") {
  alert("NO CRUZAR!");
} else {
  alert("EL SEMAFORO NO ANDA O ESTÁ AVERIADO!");
}

/* Un banco donde 
si el saldo era negativo me dira "debes dinero, no puedes retirar" , 
si esta en 0, me dirá "estas en 0", 
si es postivo me dirá "puedes retirar dinero" 
*/
let saldo = Number(prompt("INGRESA TU SALDO IMAGINARIO PARA HACER LA PRUEBA"));

if (saldo < 0) {
  alert("debes dinero, no puedes retirar, tu saldo es=> "+ saldo);
} else if (saldo === 0) {
  alert("estas en 0, te prestaremos dinero tu saldo es=> " +saldo);
} else if (saldo > 0) {
  alert("puedes retirar dinero tu saldo es=> "+ saldo);
} else {
  alert("SALDO INGRESADO INCORRECTAMENTE");
}
