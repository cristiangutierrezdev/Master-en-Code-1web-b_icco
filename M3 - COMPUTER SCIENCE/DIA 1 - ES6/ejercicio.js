/* TAREA:
Crear una serie de funciones flecha que reciban como parámetro dos números.
cada funcion debe recibir los dos números y realizar una operación matemática.
-Suma, Resta, Multiplicación , División
-Las funciones deben retornar solamente el valor (NO CONSOLE.LOG())
-Comprobar que funcionen correctamente */

const num1 = 5;
const num2 = 5;

/*ES5 EXPRESIÓN DE FUNCIÓN */
function suma(parametro1, parametro2) {
  let resultado = parametro1 + parametro2;
  return resultado;
}

/*ES6 FUNCIÓN FLECHA */
const sumaFlechaLarga = (parametro1, parametro2) => {
  let resultado = parametro1 + parametro2;
  return resultado;
}; /* EJEMPLO DE FUNCION FLECHA CON MAS DE UNA LINEA */

const sumaFlechaCorta = (parametro1, parametro2) => parametro1 + parametro2;
//Se puede omitir el return y las llaves {} si es una sola línea de programación después de la flecha. RETURN IMPLÍCITO

/* Muestro en consola los resultados */
console.log("suma1 ", suma(num1, num2));
console.log("suma2 ", sumaFlechaCorta(num1, num2));
console.log("suma3 ", sumaFlechaCorta(num1, num2));
