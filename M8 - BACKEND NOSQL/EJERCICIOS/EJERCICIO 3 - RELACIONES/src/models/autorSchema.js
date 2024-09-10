import { Schema, model } from "mongoose";

const autorSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    nacionalidad: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Autor = model("autor", autorSchema);

export default Autor;
