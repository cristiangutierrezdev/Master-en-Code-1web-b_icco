import {Schema, model} from "mongoose"

const clienteSchema = new Schema(
    {
    nombre: {
        type:String,
        required:true
    },
    cedula:{
        type:Number,
        unique: true,
        minlength:7,
        maxlength:10
    },
    tel:{
        type:Number,
        required:true
    },
    direccion:{
        type:String
    }
},
{
    versionKey:false,
    timestamps:true
})

const Clientes = model("clientes", clienteSchema)

export default Clientes