class SeresVivos {
    constructor(numeroPatas, camina, vuela){
        this.numeroPatas = numeroPatas;
        this.camina = camina;
        this.vuela = vuela
    }
}

class Humano extends SeresVivos {
    constructor(numeroPatas, camina, vuela, nombre, apellido, edad){
        super(numeroPatas, camina, vuela)
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }
    pensamiento(pensamiento){
        return `${this.nombre} ${this.apellido} esta pensando en ${pensamiento} `
    }
}

class Usuario extends Humano {
    constructor(numeroPatas, camina, vuela, nombre, apellido, edad, email, id){
        super(numeroPatas, camina, vuela, nombre, apellido, edad)
        this.email = email;
        this.id = id
    }
}

const cristian = new Humano(2, true, false, "Cristian","Gutierrez", 29);

// console.log(cristian.pensamiento("Videojuegos"));

export default Usuario