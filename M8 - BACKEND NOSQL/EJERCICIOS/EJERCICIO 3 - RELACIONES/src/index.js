import express from "express";
import { connection } from "./db.js";
import { autorRouter } from "./routes/autor.routes.js";
import { cancionRouter } from "./routes/canciones.routes.js";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use("/v1/app/", autorRouter);
app.use("/v1/app/", cancionRouter);

app.use((req, res) => {
  res.status(404).send("page not found");
});

app.listen(3000, () => {
  console.log("Server on port " + 3000);
});
