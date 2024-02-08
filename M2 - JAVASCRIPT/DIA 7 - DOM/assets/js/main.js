/* LOGIN */
/* Que al ingresar un usuario y contraseña me dirija a la página del cajero */
/* Debo declarar usuarios (3) */
const cuentas = [
  { nombre: "Mali", password: 1234, saldo: 200 },
  { nombre: "Gera", password: 12345, saldo: 290 },
  { nombre: "Maui", password: 123456, saldo: 67 },
  { nombre: "Lautaro", password: 123457, saldo: 120 },
];
let usuarioRegistrado = null; //Variable para modificar con el usuario que ingrese , EJ:  { nombre: "Lautaro", password: 123457, saldo: 120 },

/* 1- LOGIN DE USUARIO => COMPARAR USUARIO Y CONTRASEÑA */
function login(usuario, contraseña) {
  /* - recorrer el array de cuentas y preguntar si el nombre de usuario y contraseña coincide con alguno del array  */
  /* - Retornar algo que me haga dar cuenta si el usuario y contraseña son correctos: true, el usuario, "ingreso correcto" */
}

/*2- CONSULTAR SALDO => DEBE LEER Y MOSTRAR EL SALDO DEL USUARIO REGISTRADO  */
function consultarSaldo(usuario) {
  /* la función debe retornar el saldo del usuario , EJ: usuarioRegistrado = { nombre: "Lautaro", password: 123457, saldo: 120 }, */
  return usuario.saldo;
}

/*3- INGRESAR DINERO */
function ingresarDinero(monto) {
  let saldoDelUsuario = consultarSaldo(usuarioRegistrado);
}

/*4- RETIRAR DINERO */
function ingresarDinero(monto) {
  let saldoDelUsuario = consultarSaldo(usuarioRegistrado);
}
