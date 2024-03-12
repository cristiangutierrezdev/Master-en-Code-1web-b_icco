import {
  ingresarDinero,
  retirarDinero,
  consultarSaldo,
} from "./controllers/controllers.js";

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

const tituloBienvenida = document.getElementById("tituloBienvenida");
const logoutButton = document.getElementById("logout");
const consultarSaldoBtn = document.getElementById("consultar");
const retirarSaldoBtn = document.getElementById("retirar");
const ingresarSaldoBtn = document.getElementById("ingresar");
const resultadoSection = document.getElementById("resultado-operacion");

/* BANNER DE BIENVENIDA AL USUARIO */
tituloBienvenida.innerHTML += usuarioLogueado.nombre;

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioLogueado"); // elimino el usuario de la memoria del navegador
  window.location = "./index.html"; // ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
});

consultarSaldoBtn.addEventListener("click", function () {
  let saldoActual = consultarSaldo(usuarioLogueado);
  resultadoSection.innerHTML = `Tu saldo actual es de  $${saldoActual}`;
});

retirarSaldoBtn.addEventListener("click", function () {
  let montoRetiro = Number(prompt("Ingrese el monto a retirar"));
  let saldoActual = consultarSaldo(usuarioLogueado);

  if (saldoActual - montoRetiro < 0) {
    return alert("NO PUEDES RETIRAR UNA CANTIDAD MAYOR A TU SALDO");
  }

  let usuarioModificado = retirarDinero(usuarioLogueado, montoRetiro);

  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioModificado));
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  resultadoSection.innerHTML = `Retiraste $${montoRetiro}, Tu saldo actual es de  $${usuarioLogueado.saldo}`;
});

ingresarSaldoBtn.addEventListener("click", function () {
  let montoIngreso = Number(prompt("Ingrese el monto a retirar"));
  let saldoActual = consultarSaldo(usuarioLogueado);

  if (saldoActual + montoIngreso > 1001) {
    return alert("NO PUEDES TENER MAS DE $1001 EN TU CUENTA");
  }

  let usuarioModificado = ingresarDinero(usuarioLogueado, montoIngreso);

  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioModificado));
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));

  resultadoSection.innerHTML = `Ingresaste $${montoIngreso}, Tu saldo actual es de  $${usuarioLogueado.saldo}`;
});
