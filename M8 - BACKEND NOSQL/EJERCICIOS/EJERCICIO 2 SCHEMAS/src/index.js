import express from "express";
import { conexion } from "./db.js";
import { libroRouter } from "./routes/libros.routes.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(libroRouter);

app.listen(3000, () => {
  console.log("Server on port " + 3000);
});
