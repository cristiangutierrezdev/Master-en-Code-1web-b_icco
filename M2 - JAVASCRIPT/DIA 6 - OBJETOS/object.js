/* OBJETOS LITERALES => una estructura de dato, que almacenan sus propiedades en un par clave/valor */
/* un método es una propiedad que tiene como valor una función dentro de un objeto */
let carro = {
  marca: "Lamborgini",
  modelo: "Diablo",
  año: 2024,
  arrancar: function () {
    console.log("BBRuuum");
  },
  claxon: function () {
    console.log("piiipiiiiiiiii");
  },
};
//NOTACION POR PUNTO VS NOTACION DE CORCHETES
// console.log(carro.marca);
// console.log(carro["marca"]);

// console.log(carro.año);
// console.log(carro["año"]);

/* -------------------------------------------------------------- */
let perro = {
  color: "café",
  nombre: "Nilo",
  numPatas: 4,
  edad: 5,
  raza: "pitbull",
  tamaño: "mediano",
  _id: 12345,
  amigosPerrunos: ["Aria", "Tuna", "Duque", "Mariposa", "Wally"],
  saludar: function () {
    console.log("HOLA! soy Nilo");
  },
  saludarAmigos: function () {
    for (let i = 0; i < perro.amigosPerrunos.length; i++) {
      let element = perro.amigosPerrunos[i];
      console.log("Hola amigo perruno " + element);
    }
  },
};
console.log(perro.edad);
console.log(perro["numPatas"]);
perro.saludar();
perro.saludarAmigos();
