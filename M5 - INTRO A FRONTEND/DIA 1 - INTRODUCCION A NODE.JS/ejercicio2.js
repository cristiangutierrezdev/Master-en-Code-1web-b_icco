 const miArreglo = [1,2,3,4,5,6,7,8,9,10]
const nuevoNumero = 11;

function modificarArreglo(unaFuncion, numero){
    return unaFuncion(miArreglo, numero)
}

function eliminarEnPila(arreglo){
    arreglo.pop()
    return arreglo
}
function eliminarEnCola(arreglo){
    arreglo.shift()
    return arreglo
}
function agregarElemento(arreglo, numero){
    arreglo.push(numero)
    return arreglo
}
console.log(modificarArreglo(eliminarEnCola));