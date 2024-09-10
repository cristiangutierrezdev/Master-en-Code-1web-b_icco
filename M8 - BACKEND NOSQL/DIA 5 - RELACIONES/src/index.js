import express from "express";
import { conexion } from "./db.js";
import { rutaCliente } from "./routes/clientes.route.js";
import { rutaProducto } from "./routes/productos.routes.js";
import { ticketRouter } from "./routes/tickets.routes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(rutaCliente);
app.use(rutaProducto);
app.use(ticketRouter);
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000, () => {
  console.log("Server on port " + 3000);
});
