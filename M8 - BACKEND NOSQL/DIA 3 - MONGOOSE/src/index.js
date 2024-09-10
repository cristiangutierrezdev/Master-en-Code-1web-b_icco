import express from "express";
import { conexion } from "./db.js";
import Usuario from "./models/usuarioSchema.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // const usuario = Usuario(req.body);
    const result = await Usuario(req.body).save();
    res.send("Se guardo con exito");
  } catch (error) {
    res.status(500).sendStatus(500);
    console.log(error);
  }
});



app.get("/", async (req, res) => {
  try {
    const email = req.query
    console.log(email);
    const result = await Usuario.find(email)
    res.json(result)
  } catch (error) {
    res.status(404).sendStatus(404)
    console.log(error);
  }
});




app.listen(3000, () => {
  console.log("Server on port " + 3000);
});
