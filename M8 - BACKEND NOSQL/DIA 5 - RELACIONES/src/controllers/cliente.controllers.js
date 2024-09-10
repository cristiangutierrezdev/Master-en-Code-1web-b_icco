import Clientes from "../models/clienteSchema.js";

export const obtenerClientes = async (req, res) => {
  try {
    const result = await Clientes.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};

export const obtenerCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Clientes.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).sendStatus(404);
    console.log(err);
  }
};

export const actualizarCliente = async (req, res) => {
  try {
    const nuevaInfo = req.body;
    const { id } = req.params;
    const result = await Clientes.findByIdAndUpdate(id, nuevaInfo);

    if (
      nuevaInfo.nombre == undefined &&
      nuevaInfo.cedula == undefined &&
      nuevaInfo.direccion == undefined &&
      nuevaInfo.tel == undefined
    ) {
      console.log(nuevaInfo.nombre);
      res.status(204).sendStatus(204);
    } else {
      console.log(nuevaInfo.direccion);
      res.status(200).sendStatus(200);
    }
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};

export const crearClientes = async (req, res) => {
  try {
    const result = await Clientes(req.body).save();
    res.status(201).sendStatus(201);
  } catch (err) {
    res.status(500).sendStatus(500);
    console.log(err);
  }
};

export const eliminarClientes = async(req,res)=>{
  try{
    const {id} = req.params
    const result = await Clientes.findByIdAndDelete(id)
    res.status(200).send("cliente eliminado")
  }catch(err){
    res.status(500).sendStatus(500)
    console.log(err);
  }
}