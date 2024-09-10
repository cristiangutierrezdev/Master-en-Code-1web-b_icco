import Clientes from "../models/clienteSchema.js";

export const obtenerClientes = async(req,res)=>{
    try{
        const result = await Clientes.find()
        res.status(200).json(result)
    }catch(err){
        res.status(404).sendStatus(404)
        console.log(err);
    }
} 

export const crearClientes = async(req,res)=>{
    try{
        const result = await Clientes(req.body).save()
        res.status(201).sendStatus(201)
    }catch(err){
        res.status(500).sendStatus(500)
        console.log(err);
    }
}