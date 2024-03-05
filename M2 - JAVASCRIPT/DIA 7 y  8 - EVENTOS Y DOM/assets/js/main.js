/* SELECTOR POR ID=> siempre me devuelve una etiqueta=> un objeto = { } */
let parrafoPrincipal = document.getElementById("parrafo-principal");
console.log(parrafoPrincipal);
parrafoPrincipal.style.color = "blue";
parrafoPrincipal.style.padding = "25px";
parrafoPrincipal.style.border = "1px solid black";

/* SELECTOR POR ETIQUETA  =>hay varias etiquetas, nos devuelve un array = [ {} , {}] */
let etiquetasH2 = document.getElementsByTagName("h2");

for (let i = 0; i < etiquetasH2.length; i++) {
  etiquetasH2[i].style.color = "#5A5A5A";
}

/* SELECTOR POR CLASE =>hay varias etiquetas con la misma clase nos devuelve un array */
let parrafosPeligrosos = document.getElementsByClassName("warning");

for (let i = 0; i < parrafosPeligrosos.length; i++) {
  parrafosPeligrosos[i].style.color = "red";
  parrafosPeligrosos[i].style.padding = "10px 10px";
  parrafosPeligrosos[i].style.textAlign = "center";
  parrafosPeligrosos[i].innerHTML +=
    "<br> <a id='link' href='https://www.google.com' >Soy un link peligroso</a>";
}

let link = document.getElementById("link");
link.style.color = "red";

/* -----------------EVENTOS-------------------------- */

function saludar() {
  alert("HOLA! COMO ESTAS?");
}

function cambiarColor() {
  if (parrafoPrincipal.style.color === "blue") {
    parrafoPrincipal.style.color = "red";
  } else {
    parrafoPrincipal.style.color = "blue";
  }
}
