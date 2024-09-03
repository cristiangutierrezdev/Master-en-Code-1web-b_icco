import { model, Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombre:{
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  edad: {
    type:Number,
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  contrasena: {
    type:String,
    required:true,
    minlength:8,
    maxlength: 16
  },
});

 const Usuario = model('Usuario', usuarioSchema)
 
 export default Usuario


// CREATE TABLE usuario(
//     nombre VARCHAR(255) NOT NULL,
//     apellido VARCHAR(255),
//     edad NUMERIC,
//     email VARCHAR(255) UNIQUE,
//     contrasena VARCHAR(255)
// );
