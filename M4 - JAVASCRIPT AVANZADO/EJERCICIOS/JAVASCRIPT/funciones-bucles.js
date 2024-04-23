const nombre = "Jhon";
const apellido = "Doe";

function nombreCompleto() {
  const nombreCompleto = nombre + " " + apellido;

  console.log(nombreCompleto);
}

function suma(numero1, numero2) {
  const resultado = numero1 + numero2;

  console.log(resultado);
}

function resta(numero1, numero2) {
  const resultado = numero1 - numero2;

  return resultado;
}

// nombreCompleto()

const miResta = resta(23, 10) + 30;

// console.log(miResta);

function crearBucle(numero) {
  for (let contador = 0; contador < 10; contador++) {
    const resultado = numero * contador;
    console.log(resultado);
  }
}

// crearBucle(10)

for (let contador = 0; contador < 10; contador++) {
  const resultado = resta(10, contador)

  console.log(resultado);
}

const miArreglo = ["Bolivia", "Colombia", "Mexico"]

for (let index = 0; index < miArreglo.length; index++) {
  const pais = miArreglo[index];
  console.log(pais);
}