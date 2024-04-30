// ----------------------------------------------------------------
// function activaUnaFuncion(otraFuncion) {
//   otraFuncion()
// }

// function mostrarMensaje(){
//   console.log("Este es el mensaje");
// }

// function mostrarNombre(){
//   console.log("El nombre es John Doe");
// }

// activaUnaFuncion(mostrarMensaje)

// ----------------------------------------------------------------

const contenedorResultado = document.querySelector("#resultado");
const inputNumero1 = document.querySelector("#numero1");
const inputNumero2 = document.querySelector("#numero2");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

function restar(numero1, numero2) {
  return numero1 - numero2;
}

function calcularYMostrar(funcionDeCalculo) {
  const input1Value = new Number(inputNumero1.value)
  const input2Value = new Number(inputNumero2.value)
  const resultado = funcionDeCalculo(input1Value, input2Value);

  contenedorResultado.textContent = `El resultado es: ${resultado}`
}

btnSumar.onclick = function () {
  calcularYMostrar(sumar)
}

btnRestar.onclick = function () {
  calcularYMostrar(restar)
}

const arreglo = [2,3,4]

function paraForEach (param){
  console.log(param);
}

arreglo.forEach(paraForEach)

// callback hell
