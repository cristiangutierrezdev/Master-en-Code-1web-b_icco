/*  
Clase Persona
Abstraccion: 
nombre 
edad
genero
comida
---------
puede hablar 
puede comer
*/

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


