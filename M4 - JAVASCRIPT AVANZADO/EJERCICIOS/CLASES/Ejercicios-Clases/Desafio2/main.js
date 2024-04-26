//Creamos nuestra clase libro donde le pedimos las propiedades que queremos que tengan nuestros objetos
class Libro {
    constructor(titulo, autor, anoPublicacion, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacion = anoPublicacion;
        this.genero = genero
    }
// Creamos nuestro metodo donde mostraremos en consola cada valor asignado de nuestros libros usando templates strings para concatenarlos
    mostrarDetalles(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Titulo: ${this.autor}`);
        console.log(`Titulo: ${this.anoPublicacion}`);
        console.log(`Titulo: ${this.genero}`);
        
    }
}

//Creamos nuestras 2 instancias u objetos que vamos a usar
const  libro1 = new Libro("cien años de soledad", "Gabriel Garcia Marquez", 1967, "narracion" );
const libro2 = new Libro ("sangre de mestizos", "Augusto cespedes", 1936, "novela");

//Mediante el metododo que creamos anteriormente accedemos a los detalles de nuestro libro
libro1.mostrarDetalles()
console.log("-----------------------");
libro2.mostrarDetalles()

//Creamos un arreglo vacio donde vamos a guardar nuestros libros
const mostrarListaLibros = []

//con esta funcion podemos agregar los libros en nuestro arreglo mediante el metodo push()
function agregarLibro(libro){
    mostrarListaLibros.push(libro)
}
//Llamamos la funcion y le damos los parametros que me solicitia
agregarLibro(libro1)
agregarLibro(libro2)

//Con el foreach que es un metodo de los arreglos, recorremos nuestro arreglo para mostrar la cantidad de elementos(libros en este caso) que guardamos en nuestr arreglo
console.log("-----------------------");
mostrarListaLibros.forEach((element)=>{
    console.log(element);
})