//Creamos el arreglo con las notas del estudiante
const notasEstudiante1 = [4.5, 5.0, 3.2, 2.8, 1.0]
const notasEstudiante2 = [1.0, 2.0, 4.5, 5.0, 1.5]
const notasEstudiante3 = []

//Creamos la funcion con la que calcularemos el promedio final del estudiante
function calcularPromedio(notas) {
    //validamos que no sea un arreglo vacio
    if (notas == "") {
        return `no hay notas para promediar`
    } else {
        let sumaNotas = 0
        notas.forEach((elemento) => {
            sumaNotas += elemento
        });
        let promedio = sumaNotas / notas.length
        //con las comillas invertidas o templates string, concatenamos el mensaje con la variable que es el promedio total
        return `El promedio del estudiante es: ${promedio}`
    }
}
s
//mostramos la funcion en la consola
console.log(calcularPromedio(notasEstudiante3));


