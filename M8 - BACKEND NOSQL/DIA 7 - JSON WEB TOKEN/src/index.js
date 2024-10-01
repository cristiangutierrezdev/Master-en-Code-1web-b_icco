import express from "express";
import { connect } from "mongoose";
import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken"


//Configuramos express con sus middelwares para que entienda el body de la peticion
const app = express();
app.use(express.urlencoded({ extended: false }));

//Middelware de verificacion del token

function autenticacion(req,res,next){
    try{
        const bearerToken = req.headers.authorization

        if(bearerToken){
           const token = bearerToken.split(" ")[1]
           console.log(token);

           const autorizado = jwt.verify(token,"UnaFirma")
           console.log(autorizado);

           req.usuario = autorizado.usuarioId
           next()
        }else{
            res.status(401).sendStatus(401)
        }
 
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
}


//Squema de un usuario

const usuarioSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, maxlength: 16, minlength: 8 },
  },
  {
    versionKey: false,
    timestamps: true
  }
);


const Usuario = model("usuarios", usuarioSchema )

//Creamos las rutas para crear el usuario y mostrarlo todo desde la BD de mongo db Atlas

//PRIMER PASO ----> Creamos el usuario con el metodo POST
app.post("/", async(req,res)=>{
    try{
        const usuario = Usuario(req.body);
        await usuario.save()
        res.status(201).json({mensaje:"Usuario creado"})
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
})

//SEGUNDO PASO ---> Obtener Usuarios

app.get("/", (req,res)=>{
    res.send("Esta es la ruta principal")
})
app.get("/usuarios", async(req,res)=>{
    try{
        const usuarios = await Usuario.find()
        res.status(302).json(usuarios)

    }catch(error){
        res.status(404).sendStatus(404)
        console.log(error);
    }
})

//Tercer Paso --> Mediante la ruta, le enviamos el token al usuario

app.post("/token", async(req,res)=>{
    try{
        const {email} = req.body
        const usuario = await Usuario.findOne({email})

        if(usuario){
            const token = jwt.sign({usuarioId: usuario._id},"UnaFirma",{ expiresIn:"1m"})
            res.status(200).json(token)
        }else{
            res.status(404).json({mensaje:"no existe el email"})
        }
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
})


//CUARTO PASO --> Creamos la ruta para obtener un usuario

app.get("/usuario", autenticacion, async(req,res)=>{
    try{
        const result = await Usuario.findById(req.usuario)
        res.json(result)
    }catch(error){
        res.status(404).sendStatus(404)
        console.log(error);
    }
})



app.use((req,res)=>{
    res.status(404).send("Pagina no encontrada")
})

// {llave: valor;llave2: valor;}
// String, Boolean, Number, [], {}, undefined, null;


//Conectamos nuestra base de datos a mongoDbAtlas

const url = "mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/login";
async function conexion() {
  try {
    await connect(url);
    console.log("Base de datos conectada");
  } catch (err) {
    console.log(err);
  }
}
conexion();

//Levantamos el servidor con express en el puerto 4000

app.listen(4000, () => {
  console.log("Server on port " + 4000);
});
