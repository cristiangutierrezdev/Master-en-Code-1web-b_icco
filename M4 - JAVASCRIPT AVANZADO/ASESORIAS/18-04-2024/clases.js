// const carro1 = {
//   color: "red",
//   peso: 1200,
//   pitar: function () {},
// };

// const carro2 = {
//   color: "black",
//   peso: 1000,
//   pitar: function () {},
// };

// const carr3 = {
//   color: "green",
//   peso: 800,
//   pitar: function () {},
// };

// Clase maestra
class Automotor {
  constructor(color, peso, marca) {
    this.color = color;
    this.peso = peso;
    this.marca = marca;
  }

  pitar() {
    return "Estoy pitando";
  }
}

// Subclases
class Carro extends Automotor {
  constructor(color, peso, marca, numeroPuertas) {
    super(color, peso, marca);
    this.numeroPuertas = numeroPuertas;
  }
}

class Moto extends Automotor {
  constructor(color, peso, marca,cadena) {
    super(color, peso, marca);
    this.cadena = cadena;
  }

  hacerStunt(){
    return "🏍️"
  }
}

class Scooter extends Moto {
  constructor(color, peso, marca,cadena) {
    super(color, peso, marca, cadena);
  }

  cargar(){
    return "estoy carganado"
  }
}

const carro1 = new Carro("red", 1200, "Ford", 3);
const carro2 = new Carro("black", 1000, "BMW", 5);
const carro3 = new Carro("green", 800, "Renault", 5);
const moto = new Moto("pink", 400, "KTM", "gruesa");
const scoot = new Scooter("black", 400, "KTM", "gruesa");

console.log(scoot.pitar());

const arregloDeCarros = [carro1, carro2, carro3];
