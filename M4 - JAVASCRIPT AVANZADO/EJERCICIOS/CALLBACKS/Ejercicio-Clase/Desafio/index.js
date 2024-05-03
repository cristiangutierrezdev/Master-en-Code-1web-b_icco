//Obtenemos todos los datos que necesitamos de nuestro html
const inputGrados = document.querySelector("#temperatura");
const btnCelsius = document.querySelector("#btn-celsius")
const btnfahrenheit = document.querySelector("#btn-fahrenheit")
const resultado = document.querySelector("#motrar-conversion")

//creamos la funcion que nos permite convertir un dato en grados celsius
function convertirCelsius(grados) {
    let celsius = (grados - 32) * 5 / 9
//retornamos el resultado que guardamos en la variable celsius y lo concatenamos con su descripcion

    return `${celsius}°C`
}
//creamos la funcion que nos permite convertir un dato en grados fahrenheit
function convertirfahrenheit(grados) {
    let fahrenheit = grados * 9 / 5 + 32
//retornamos el resultado que guardamos en la variable fahrenheit y lo concatenamos con su descripcion
    return `${fahrenheit}°F`
}
//creamos la funcion que nos permite utilizar otra funcion llamandola desde sus parametros
//obtenemos el valor del input y mostramos el texto con el resultado en pantalla
function convertirGrados(convertirTemperatura) {
    const inputGradosValue = inputGrados.value
    const conversion = convertirTemperatura(inputGradosValue)
    resultado.textContent = conversion
}
//le anexamos las funcionalidades al boton de convertir grados celsius llamando una funcion y dandole como parametro otra (callback)
btnCelsius.onclick = function () {
    convertirGrados(convertirCelsius)
}
//le anexamos las funcionalidades al boton de convertir grados fahrenheit llamando una funcion y dandole como parametro otra (callback)
btnfahrenheit.onclick = function () {
    convertirGrados(convertirfahrenheit)
}