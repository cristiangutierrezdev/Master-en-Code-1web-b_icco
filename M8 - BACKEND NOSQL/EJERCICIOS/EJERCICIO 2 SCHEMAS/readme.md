# Ejercicio de la clase 🔨

**Vas a crear una API sencilla que permita gestionar una colección de libros. Cada libro tendrá un título, un autor, el número de páginas y el año de publicación. La API permitirá agregar nuevos libros**

## Libros de ejemplos 📖

- **Título: Don Quijote de la Mancha** 📕
Autor: Miguel de Cervantes
Páginas: 863
Año de Publicación: 1605
<hr>

- **Título: El amor en los tiempos del cólera** 📗
Autor: Gabriel García Márquez
Páginas: 348
Año de Publicación: 1985
1984
<hr>

- **Título: Los deshabitados** 📘
Autor: Marcelo Quiroga Santa Cruz
Páginas: 192
Año de Publicación: 1957
<hr>

- **Título: Felipe Delgado** 📙
Autor: Jaime Saenz
Páginas: 556
Año de Publicación: 1979
<hr>


-  **Título: Cien años de soledad** 📔
Autor: Gabriel García Márquez
Páginas: 417
Año de Publicación: 1967
Don Quijote de la Mancha 
<hr>

-  **Título: Juan de la Rosa** 📙
Autor: Nataniel Aguirre
Páginas: 392
Año de Publicación: 1885

### Ejemplo de esquema
``` 
const libroSchema = new mongoose.Schema({
   titulo:{ 
    type: String, 
    required: true 
    },
   autor:{ 
    type: String, 
    required: true 
    },
   paginas:{ 
    type: Number, 
    required: true 
   },
   añoPublicacion: { 
    type: Number, 
    required: true 
    }
});

const Libro = mongoose.model('Libro', libroSchema); 
```

