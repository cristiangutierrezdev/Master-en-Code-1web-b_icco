/* CONTROLADORES DE LA CUENTA */
export function consultarSaldo(usuario) {
  return usuario.saldo;
}

export function ingresarDinero(usuario, montoIngreso) {
  let saldoDelUsuario = consultarSaldo(usuario);

  let nuevoSaldo = saldoDelUsuario + montoIngreso;
  let usuarioModificado = { ...usuario, saldo: nuevoSaldo };

  return usuarioModificado;
}

export function retirarDinero(usuario, montoRetiro) {
  let saldoDelUsuario = consultarSaldo(usuario);

  let nuevoSaldo = saldoDelUsuario - montoRetiro;
  let usuarioModificado = { ...usuario, saldo: nuevoSaldo };

  return usuarioModificado;
}
