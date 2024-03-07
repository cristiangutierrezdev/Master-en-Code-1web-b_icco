import { Product } from "./Product.js";

export class Mobile extends Product {
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

export class Videogame extends Product {
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
