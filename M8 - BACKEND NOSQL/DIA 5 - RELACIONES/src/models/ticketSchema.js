import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    fecha: {
      type: Date,
      default: Date.now,
    },
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "clientes",
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    producto: {
      type: Schema.Types.ObjectId,
      ref: "productos",
      required: true,
    },
    total: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

ticketSchema.pre("save", async function () {
  try {
    const producto = await model("productos").findById(this.producto);
    console.log(producto);

    this.total = this.cantidad * producto.precioVenta;
  } catch (err) {
    console.log(err);
  }
});

ticketSchema.methods.populateReferences = async function () {
  const result = await this.populate("producto")
    .populate("cliente")
    .exectPopulate();
  return result;
};

const Ticket = model("Ticket", ticketSchema);

export default Ticket;
