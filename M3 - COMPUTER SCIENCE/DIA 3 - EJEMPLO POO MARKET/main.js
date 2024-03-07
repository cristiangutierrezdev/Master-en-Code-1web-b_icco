/* Crear las clases que nos piden -- producto, tipo producto, carrito */

class Producto {
  constructor(precio, stock) {
    this.precio = precio;
    this.stock = stock;
  }

  getPrecio() {
    return this.precio;
  }
  getStock() {
    return this.stock;
  }
  setPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }
  setStock(numero) {
    this.stock = this.stock + numero;
  }
}

class Celular extends Producto {
  constructor(
    precio,
    stock,
    marca,
    modelo,
    ram,
    almacenamiento,
    camara,
    imagen
  ) {
    super(precio, stock);
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
    this.camara = camara;
    this.imagen = imagen;
  }
}
/* -------------------Función que crea tarjetas de productos en el html-------------------- */
const showProducts = (products) => {
  let productsHTML = "";

  products.forEach(
    (product) =>
      (productsHTML += `      
                <div class="card" style="width: 18rem">
                    <img src=${product.imagen} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">${product.marca} - ${product.modelo}</h5>
                      <p class="card-text">Memoria Ram: ${product.ram}</p>
                      <p class="card-text">Almacenamiento: ${product.almacenamiento}"</p>
                      <p class="card-text">Precio: $${product.precio}</p>
                      <a href="#" class="btn btn-primary">🛒 Agregar al carrito</a>
                    </div>
                </div>
                           `)
  );

  productsContainer.innerHTML = productsHTML;
};

/* -------------------Función que crea una nueva instancia-------------------- */

const createNewProduct = (product) => {
  let newProduct = new Celular(
    product.precio,
    product.stock,
    product.marca,
    product.modelo,
    product.ram,
    product.almacenamiento,
    product.camara,
    product.imagen
  );

  products.push(newProduct);

  showProducts(products);
};

/*-------------------------------- MANEJO DEL DOM ---------------------------------------*/
const products = [];

let precioInput = document.getElementById("precio");
let stockInput = document.getElementById("stock");
let marcaInput = document.getElementById("marca");
let modeloInput = document.getElementById("modelo");
let ramInput = document.getElementById("ram");
let almacenamientoInput = document.getElementById("almacenamiento");
let camaraInput = document.getElementById("camara");
let imagenInput = document.getElementById("imagen");
let createBtn = document.getElementById("create-btn");
let productsContainer = document.getElementById("products-container");

let formValues = {}; //Aqui iran los valores del formulario

function onChangeInput(event) {
  formValues = { ...formValues, [event.target.id]: event.target.value };
  console.log(formValues);
}

precioInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

stockInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

marcaInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

modeloInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

ramInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

almacenamientoInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

camaraInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

imagenInput.addEventListener("change", (event) => {
  onChangeInput(event);
});

createBtn.addEventListener("click", (event) => {
  event.preventDefault(); //evita que la página se recargue

  createNewProduct(formValues);
});
