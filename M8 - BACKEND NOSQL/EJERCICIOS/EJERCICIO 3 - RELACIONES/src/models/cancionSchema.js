import { Schema, model } from "mongoose";

const cancionSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    duracion: {
      type: String,
      required: true,
    },
    autor: {
      type: Schema.Types.ObjectId,
      ref: "autor",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

cancionSchema.pre("save", async function () {
  try {
    const result = model("autor").findById(this.autor);
    this.autor = result;
  } catch (err) {
    console.log(err);
  }
});

cancionSchema.methods.populateReferences = async function(){
    try{
        await this.populate(this.autor).exectPopulate()
    }catch(err){
        console.log(err);
    }
}

const Cancion = model ("cancion", cancionSchema)

export default Cancion
