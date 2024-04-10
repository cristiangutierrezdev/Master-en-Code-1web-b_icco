// Pilas - Stack
const historial = []

const pagina1 = "Google"
const pagina2 = "Youtube"
const pagina3 = "Gmail"

historial.push(pagina1)

console.log(historial);

historial.push(pagina2)

console.log(historial);

historial.push(pagina3)

console.log(historial);

historial.pop()

console.log(historial);


console.log("---------------------------");
const pasosReceta = []

const paso1 = "Calentar Sarten"
const paso2 = "Agregar Mantequilla";
const paso3 = "Agregar huevo"

pasosReceta.push(paso1)

console.log(pasosReceta);

pasosReceta.push(paso2)

console.log(pasosReceta);

pasosReceta.push(paso3)

console.log(pasosReceta);

pasosReceta.shift();

console.log(pasosReceta);

pasosReceta.shift();

console.log(pasosReceta);

pasosReceta.shift();

console.log(pasosReceta);

class Receta {
  constructor() {
    this.pasos = []
  }

  agregarPaso(paso){
    this.pasos.push(paso)
  }

  pasoRealizado(){
    this.pasos.shift()
  }

  renderReceta(){
    console.log("pasos renderizados");
  }

  crearImagenes(){
    this.pasos.forEach(()=>{
      console.log("se creo imagen");
    })
  }
}

const huevoFrito = new Receta()

huevoFrito.agregarPaso("Calentar sarten")
huevoFrito.agregarPaso("Calentar sarten")
huevoFrito.agregarPaso("Calentar sarten")
huevoFrito.agregarPaso("Calentar sarten")

console.log(huevoFrito);
huevoFrito.renderReceta()
huevoFrito.crearImagenes()