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



/*-------------------------------- MANEJO DEL DOM ---------------------------------------*/
let precioInput = document.getElementById("precio");
let stockInput = document.getElementById("stock");
let marcaInput = document.getElementById("marca");
let modeloInput = document.getElementById("modelo");
let ramInput = document.getElementById("ram");
let almacenamientoInput = document.getElementById("almacenamiento");
let camaraInput = document.getElementById("camara");
let imagenInput = document.getElementById("imagen");
let formValues = {}; //Aqui iran los valores del formulario

function onChangeInput(event) {
///                                 marca       :   samsung
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


console.log(formValues);