import express from "express";
import { conexion } from "./db.js";

const app = express();

conexion(); 
// conexion();

app.get("/", (req,res)=>{
    res.send("<h1>Ruta principal</h1>")
})

console.log("Hola");
app.listen(4000, () => {
  console.log("Server on port " + 4000);
});
