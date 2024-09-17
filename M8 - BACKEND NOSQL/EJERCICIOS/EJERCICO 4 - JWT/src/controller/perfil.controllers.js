import Perfil from "../models/perfilSchema.js";
import jwt from "jsonwebtoken"

export const obtenerPerfiles = async(req,res)=>{
    try{
        const perfiles = await Perfil.find()
        res.status(200).json(perfiles)
    }catch(error){
        res.status(404).sendStatus(404)
        console.log(error);
    }
}
export const crearPerfil = async(req,res)=>{
    try{
        const perfil = Perfil(req.body)
        await perfil.save()
        res.status(201).sendStatus(201)
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
}

export const obtenerToken = async(req,res)=>{
    try{
        const {email, password} = req.body
        const usuario = await Perfil.findOne({email})
        if(usuario){
            const comparacion = await usuario.compararPasswords(password)
            if(comparacion){
                const token = jwt.sign({usuarioId: usuario._id},process.env.TOKEN_FIRMA,{expiresIn:"120s"})
                res.json(token)
            }else{
                res.status(401).sendStatus(401)
            }
        }else{
            res.status(404).send("email o contrasena incorrectos")
        }
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
}
export const perfil = async(req,res)=>{
    try{
        const usuarioId = req.perfil
        const usuario = await Perfil.findById(usuarioId)
        if(usuario){
            res.json(usuario)
        }else{
            res.send("user not found")
        }
    }catch(error){
        res.status(500).sendStatus(500)
        console.log(error);
    }
}