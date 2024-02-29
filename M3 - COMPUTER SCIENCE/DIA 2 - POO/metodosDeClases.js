/* Abstraccion
PROPIEDADES
nombre, piernaHabil, fuerza, velocidad, posicion, habilidad
MÉTODOS
correr
cabecear
patear al arco
dar un pase
obtener características(estado Fisico)
regatear
*/

class Futbolista {
  constructor(nombre, piernaHabil, fuerza, velocidad, posicion, habilidad) {
    this.nombre = nombre;
    this.piernaHabil = piernaHabil;
    this.fuerza = fuerza;
    this.velocidad = velocidad;
    this.posicion = posicion;
    this.habilidad = habilidad;
  }

  patearAlArco() {
    `${this.nombre} hizo un gol`;
  }
  correr() {
    console.log(
      `${this.nombre} está corriendo a una velocidad de ${this.velocidad} km/h`
    );
  }
  regatear(jugador) {
    console.log(`${this.nombre} regateó a ${jugador}`);
  }
}

let futbolista1 = new Futbolista("Messi", "zurdo", 90, 95, "delantero", 100);
let futbolista2 = new Futbolista("CR7", "derecho", 99, 99, "delantero", 85);
let futbolista3 = new Futbolista("neymar", "derecho", 90, 90, "delantero", 95);
let futbolista4 = new Futbolista("benzema", "derecho", 89, 89, "delantero", 90);
let futbolista5 = new Futbolista("buffon", "derecho", 80, 70, "portero", 90);

futbolista1.correr();
futbolista1.regatear("CR7");
futbolista1.patearAlArco();
