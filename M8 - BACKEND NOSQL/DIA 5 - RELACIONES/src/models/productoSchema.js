import { Schema, model } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      default: 0,
    },
    precioCosto: {
      type: Number,
      default: 0,
    },
    precioVenta: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Producto = model("productos", productoSchema);

export default Producto;
