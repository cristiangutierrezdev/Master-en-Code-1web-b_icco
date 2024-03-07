export class Product {
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