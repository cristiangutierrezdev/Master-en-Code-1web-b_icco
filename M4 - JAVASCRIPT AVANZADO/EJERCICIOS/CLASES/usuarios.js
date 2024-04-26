import Usuario from "./clases.js"

const nombreUsuario = document.getElementById("nombre-usuario");
const apellidoUsuario = document.getElementById("apellido-usuario");
const edadUsuario = document.getElementById("edad-usuario");
const emailUsuario = document.getElementById("email-usuario");
const btn = document.getElementById("enviar")

const usuarios = []

btn.onclick = function () {
    function idAleatorio() {
       return Math.floor(Math.random() * 100000)
    }
    if (nombreUsuario.value != "" && apellidoUsuario.value != "" && edadUsuario.value != "" && emailUsuario.value != "") {
        const nuevoUsuario = new Usuario(2, true, false, nombreUsuario.value, apellidoUsuario.value, edadUsuario.value, emailUsuario.value, idAleatorio())
        usuarios.push(nuevoUsuario)
        for (let i = 0; i < usuarios.length; i++) {
            console.log(usuarios[i]);
        }
    }else{
        alert("FALTAN CAMPOS POR COMPLETAR")
    }
}
