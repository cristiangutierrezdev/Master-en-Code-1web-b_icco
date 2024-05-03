const urlBase =
  "https://experimental-unicorns-experimental-org.koyeb.app/api/v1";
const btn = document.querySelector("#btn");
const btnCrear = document.querySelector("#btn-crear");
const nombreInput = document.querySelector("#nombre");
const poderInput = document.querySelector("#poder");
const urlImgInput = document.querySelector("#img");
const edadInput = document.querySelector("#edad");
const btnEliminar = document.querySelector("#btn-eliminar");
const btnModificar = document.querySelector("#btn-modificar");
const idInput = document.querySelector("#id-unicornio");

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
  console.log(error);
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
  const idUnicornio = idInput.value
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${urlBase}/unicorns/${idUnicornio}`, config)
  .then(primerCallback)
  .then(function (resultado) {
    console.log("Se eliminó el unicornio", resultado);
  })
  .catch(atraparErrorCallback);
}

function modificarUnicornio() {
  const idUnicornio = idInput.value
  const data = {
    name: nombreInput.value,
    power: poderInput.value,
    image: urlImgInput.value,
    age: edadInput.value,
  };

  // Utilizamos Fetch con peticion POST
  const config = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`${urlBase}/unicorns/${idUnicornio}`, config)
    .then(primerCallback)
    .then(function (resultado) {
      console.log("Se modificó el unicornio", resultado);
    })
    .catch(atraparErrorCallback);
}

btn.addEventListener("click", obtenerDatos);
btnCrear.addEventListener("click", crearUnicornio);
btnEliminar.addEventListener("click", eliminarUnicornio)
btnModificar.addEventListener("click", modificarUnicornio)

obtenerDatos();