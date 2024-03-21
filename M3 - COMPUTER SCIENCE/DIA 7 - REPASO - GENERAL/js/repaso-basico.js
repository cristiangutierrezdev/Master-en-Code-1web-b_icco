// console.log(edad)
// var edad = 3;
// edad = 4;
// console.log(edad)
// let edad = 3
// console.log(edad)
// edad = 5
// console.log(edad)
// const edad = 3;
// console.log(edad);
// edad = 5;

// Funciones que retorna un valor (return)
function suma(valorUno, valorDos) {
  const resultado = valorUno + valorDos;

  return resultado;
}

// Funciones void (vacias), lo que significa que no retorna (return) nada
function eliminar() {}

const miSuma = suma(2, 3);

// console.log(miSuma);

// Tipo de datos
const texto = "Esto es un string (texto) y siempre va entre comillas";
const numero = 8;
const booleanos = false;
const nulo = null;
const indefinido = undefined;
const objetos = {
  llave: "valor",
  otraLlave: 23,
  unObjeto: {},
};
const arreglos = ["textos", 123, ["otro arreglo"], {}, objetos, true];

// console.log(objetos.otraLlave);
// console.log(objetos["otraLlave"]);

// console.log(arreglos[4].llave);

function maquinaDeProductos(dinero, producto) {
  if (producto === "Gaseosa") {
    if (dinero >= 3) {
      return "Gaseosa";
    } else {
      return "Dinero insuficiente";
    }
  } else if (producto === "Torta") {
    if (dinero >= 2) {
      return "Torta";
    } else {
      return "Dinero insuficiente";
    }
  } else {
    return "Producto no existente";
  }
}

maquinaDeProductos(4, "Gaseosa");

const edades = [12, 45, 56, 18];
const nombres = ["Pepito", "Doe", "Cris", "Bryan"];

function mostrarElementosDeArreglo(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

// mostrarElementosDeArreglo(edades);
// mostrarElementosDeArreglo(nombres);
