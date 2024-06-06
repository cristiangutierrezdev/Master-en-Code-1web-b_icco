const arreglo = [1, 2, 3, 4, 5]
const nuevoArreglo = []

for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i]);
}
// nuevoArreglo.push(6)
// console.log(nuevoArreglo);

const arregloConMap = arreglo.map((elementos) => ( "El numero es: " + elementos ))

arregloConMap.push(6)
console.log(arregloConMap);