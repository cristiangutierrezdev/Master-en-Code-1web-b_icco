const usuario1 = {
    name : "pedro",
    apellido : "Lopez",
    casado : false,
    edad : 32
}
 const usuario2 = {
    name : "Juan",
    apellido : "Garcia",
    casado : true,
    edad : 29
 }

const usuarios = []

function agregarUsuario(usuario){
    usuarios.push(usuario)
}

agregarUsuario(usuario1)
agregarUsuario(usuario2)


console.log(usuarios);