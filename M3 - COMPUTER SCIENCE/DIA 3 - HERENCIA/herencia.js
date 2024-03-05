/* CLASE PADRE */
class Animal {
  constructor(altura, peso, edad, color) {
    this.altura = altura;
    this.peso = peso;
    this.edad = edad;
    this.color = color;
  }
  comer() {
    return `El animal ${this.nombre} comió`;
  }
  respirar() {
    return `Estoy respirando`;
  }
  //getter
  getAltura() {
    return this.altura;
  }
  //setter
  setAltura(nuevaAltura) {
    this.altura = nuevaAltura;
    return "La altura fue modificada";
  }
}

/* SUBCLASES */
class Mamifero extends Animal {
  constructor(altura, peso, edad, color, pelaje, patas, domestico) {
    super(altura, peso, edad, color);
    this.pelaje = pelaje;
    this.patas = patas;
    this.domestico = domestico;
  }

  amamantarCrias() {
    return "Amamantando a las crías";
  }

  regularTemperaturaCorporal() {
    return "Temperatura regulada";
  }
}

/* SUBCLASE DE MAMÍFERO */
class Lobo extends Mamifero {
  constructor(
    altura,
    peso,
    edad,
    color,
    pelaje,
    patas,
    domestico,
    nombre,
    duenio
  ) {
    super(altura, peso, edad, color, pelaje, patas, domestico);
    this.nombre = nombre;
    this.duenio = duenio;
  }

  aullar() {
    return "Auuuuuuuuuuuuuu";
  }
  llamarAlaManada() {
    return "Aeeeeeeeeeeeeee";
  }
  cazar() {
    return "Has cazado una presa";
  }
}

let lobito = new Lobo(
  125,
  90,
  3,
  "negro",
  "corto",
  4,
  false,
  "Mini Lobito",
  false
);

let lobito2 = new Lobo(
  200,
  120,
  5,
  "negro",
  "largo",
  4,
  false,
  "Gran Lobo",
  false
);

console.log(lobito.getAltura()); //125
lobito.setAltura(555);
console.log(lobito.getAltura()); //555
