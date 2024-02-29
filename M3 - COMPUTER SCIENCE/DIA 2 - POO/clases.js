/*------------------- Clase Futbolista------------------- */

class Persona {
  constructor(nombre, edad, genero, comida) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.comida = comida;
  }
}

/* Crear una instancia de la clase Persona */
let persona1 = new Persona("Moises", 25, "Masculino", "Fricase");
let persona2 = new Persona("Sarina", 23, "Femenino", "Porotos");

/*------------------- Clase Futbolista------------------- */

class Futbolista {
  constructor(nombre, piernaHabil, fuerza, velocidad, posicion, habilidad) {
    this.nombre = nombre;
    this.piernaHabil = piernaHabil;
    this.fuerza = fuerza;
    this.velocidad = velocidad;
    this.posicion = posicion;
    this.habilidad = habilidad;
  }
}

let futbolista1 = new Futbolista("messi", "surdo", 90, 95, "delantero", 100);
let futbolista2 = new Futbolista("CR7", "derecho", 99, 99, "delantero", 85);
let futbolista3 = new Futbolista("neymar", "derecho", 90, 90, "delantero", 95);
let futbolista4 = new Futbolista("benzema", "derecho", 89, 89, "delantero", 90);
let futbolista5 = new Futbolista("buffon", "derecho", 80, 70, "portero", 90);

/*------------------- Clase Consolas------------------- */

class Consola {
  constructor(nombre, marca, cpu, memoriaRam, hdd, resolucion) {
    this.nombre = nombre;
    this.marca = marca;
    this.cpu = cpu;
    this.memoriaRam = memoriaRam;
    this.hdd = hdd;
    this.resolucion = resolucion;
  }
}

let consola1 = new Consola(
  "PS4",
  "sony",
  "x86-64 AMD Jagua",
  "GDDR5 8GB",
  "1 TB",
  "1080p o en 4K"
);
let consola2 = new Consola(
  "XBOX",
  "Microsoft",
  "AMD de 8 núcleos Custom",
  "8 GB de memoria RAM DDR3",
  "500Gb almacenamietn",
  "1080p y soporte 4K"
);
let consola3 = new Consola(
  "Nintendo switch",
  "nintendo",
  "NVIDIA Custom Tegra",
  "4GB RAM",
  "1tb almacenamiento",
  "1080p via HDMI en TV mode"
);

console.log(consola1);
