//Se crea una clase empleado con sus propiedades
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    aumentarSalario(porcentaje) {
        // Calcula el incremento del salario en base al porcentaje dado
        const incremento = this.salario * (porcentaje / 100);
        // Aumenta el salario
        this.salario += incremento;
    }
}

// Crea una instancia de la clase Empleado
const empleado1 = new Empleado("Juan", 10000);

// Llama al método aumentarSalario con un porcentaje de aumento del 10%
empleado1.aumentarSalario(10);

// Muestra el salario actualizado del empleado
console.log(`${empleado1.nombre} ahora tiene un salario de $ ${empleado1.salario}.`);
