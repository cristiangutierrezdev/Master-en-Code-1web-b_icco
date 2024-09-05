import express from "express"
import { conexion } from "./db.js";
import { peliculaRouter } from "./routes/peliculas.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(peliculaRouter)





app.use((req,res)=>{
    res.status(404).send("<h3>Pagina no encotrada</h3>")
})

app.listen(3000, ()=>{
    console.log("Server on port " + 3000);
})