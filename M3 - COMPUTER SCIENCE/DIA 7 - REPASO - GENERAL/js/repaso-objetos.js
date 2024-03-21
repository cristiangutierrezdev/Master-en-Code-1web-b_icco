// Objeto literal
const celular = {
  ancho: 300,
  alto: 500,
  peso: 250,
  marca: "Google",
  es5G: true,
  // Una funcion dentro de un objeto se llama metodo
  llamar: function (telefono) {
    const mensaje = "Estoy llamando al numero... " + telefono;
    return mensaje;
  },
};

/*  esta es nuestra fabrica de objetos literales */
class Dispositivo {
  /* este es nuestro trabajador y los insumos */
  constructor(ancho, alto, peso, marca, es5G) {
    this.ancho = ancho;
    this.alto = alto;
    this.peso = peso;
    this.marca = marca;
    this.es5G = es5G;
  }

  cargar() {
    return "Cargando...";
  }
}

class Celular extends Dispositivo {
  constructor(ancho, alto, peso, marca, es5G, numero) {
    super(ancho, alto, peso, marca, es5G);

    this.numero = numero;
  }

  llamar(numero) {
    if (numero === undefined) {
      return "Por favor ingrese el numero al que desea llamar";
    }

    return "Estoy llamando al numero... " + numero;
  }
}

const nuevoDispositivo = new Dispositivo(400, 600, 200, "Samsung", false);

const nuevoCelular = new Celular(300, 400, 280, "iPhone", true, 1343343465);

console.log(nuevoDispositivo.cargar());
console.log(nuevoCelular.llamar(123232));
