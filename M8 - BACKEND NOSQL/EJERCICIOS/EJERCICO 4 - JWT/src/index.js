import express from "express"
import { conexion } from "./db.js"
import { perfilRouter } from "./routes/perfil.routes.js"

const app = express()
const PORT = process.env.PORT || process.env.DB_PORT

app.use(express.urlencoded({extended:false}))
app.use(("/v1/app"),perfilRouter)



app.use((req,res)=>{
    res.status(404).send("Pagina no encontrada")
})


app.listen(PORT, ()=>{
    console.log("Server on port ", + PORT);
})