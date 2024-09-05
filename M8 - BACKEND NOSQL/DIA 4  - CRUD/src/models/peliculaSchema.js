import {Schema, model} from 'mongoose'

const peliculaSchema = new Schema(
    {
    titulo:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    lanzamiento:{
        type:String,
        required:true
    },
    calificacion:{
        type:Number,
        default: 0
    }
},
{
    versionKey: false,
    timestamps : true
}
)

const Peliculas = model('Peliculas', peliculaSchema)

export default Peliculas