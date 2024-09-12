import express from "express";
import conexion from "./db.js";
import { User } from "./userSchema.js";


const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    const usuarios = await User.find()
    res.json(usuarios)
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

app.post("/", async(req,res)=>{
    try{
        await User(req.body).save()
        res.send("Usuario Creado")
    }catch(error){
        res.sendStatus(500)
        console.log(error);
    }
})

app.post("/login",async(req,res)=>{
    try{
        const { usuario , password } = req.body
        console.log(usuario, password);
        res.send("hola")
    }catch(err){
        res.sendStatus(500)
        console.log(err);
    }
})



app.listen(4000, () => {
  console.log("Server on port " + 4000);
});
