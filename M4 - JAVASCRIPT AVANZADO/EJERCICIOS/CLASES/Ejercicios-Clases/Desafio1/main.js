//Creamos la clase rectangulo donde le pedimos los valores de ancho y alto
class Rectangulo {
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    //En nuestro metodo, tomamos los valores que nos pasan desde las intancias y realizamos la multiplicacion del ancho por la altura
    calcularArea() {
        let area = this.ancho * this.altura
        return area
    }
}

//Creamos las 2 intacias que vamos a calcular mediante el metodo
const rectangulo1 = new Rectangulo(22, 33)
const rectangulo2 = new Rectangulo(3, 4)

//Mostramos en consola el total del area del rectangulo
console.log(rectangulo1.calcularArea());
console.log(rectangulo2.calcularArea());