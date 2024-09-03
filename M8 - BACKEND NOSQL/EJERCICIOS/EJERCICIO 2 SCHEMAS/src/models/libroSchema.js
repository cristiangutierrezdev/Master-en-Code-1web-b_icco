import { Schema, model } from "mongoose";

const libroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    default:"Anonimo"
  },
  paginas: {
    type: Number,
    required: true,
  },
  añoPublicacion: {
    type: Number,
    required: true,
  },
});

export const Libros = model("Libros", libroSchema);
