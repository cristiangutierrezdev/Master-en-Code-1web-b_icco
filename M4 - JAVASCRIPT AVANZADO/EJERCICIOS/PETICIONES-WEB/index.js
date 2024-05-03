const urlBase =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1";
const btn = document.querySelector("#btn");
const btnCrear = document.querySelector("#btn-crear");
const nombreInput = document.querySelector("#nombre");
const poderInput = document.querySelector("#poder");
const urlImgInput = document.querySelector("#img");
const edadInput = document.querySelector("#edad");
const btnEliminar = document.querySelector("#btn-eliminar");


function primerCallback(resultado) {
  // resultado.json() tambien es una promesa, lo que significa que se toma un
  // tiempo en resolverse
  return resultado.json();
}

function segundoCallback(resultado) {
  console.log(resultado);
}

function atraparErrorCallback(error) {
  alert("Hubo un error, por favor intentalo mas tarde");
}

function obtenerDatos() {
  // Fetch por defecto hace una peticion GET
  fetch(`${urlBase}/unicorns`)
    .then(primerCallback)
    .then(segundoCallback)
    .catch(atraparErrorCallback);
}

function crearUnicornio() {
  const data = {
    name: nombreInput.value,
    power: poderInput.value,
    image: urlImgInput.value,
    age: edadInput.value,
  };

  // Utilizamos Fetch con peticion POST
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${urlBase}/unicorns`, config)
    .then(primerCallback)
    .then(function (resultado) {
      console.log("Se creo el unicornio", resultado);
    })
    .catch(atraparErrorCallback);
}

function eliminarUnicornio() {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${urlBase}/unicorns/66343aeae64259c249ec4f81`, config)
  .then(primerCallback)
  .then(function (resultado) {
    console.log("Se eliminó el unicornio", resultado);
  })
  .catch(atraparErrorCallback);
}

btn.addEventListener("click", obtenerDatos);
btnCrear.addEventListener("click", crearUnicornio);
btnEliminar.addEventListener("click", eliminarUnicornio)

obtenerDatos();