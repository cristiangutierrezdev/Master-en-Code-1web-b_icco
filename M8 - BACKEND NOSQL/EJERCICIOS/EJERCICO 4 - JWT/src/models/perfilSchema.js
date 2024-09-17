import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const perfilSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 16,
      minlength: 8,
    },
    lastname: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

perfilSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const passwordHash = await bcrypt.hash(this.password, 8);

      this.password = passwordHash;
      next();
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
});

perfilSchema.methods.compararPasswords =async function(pass){
    try{
        const comparacion = await bcrypt.compare(pass, this.password)
        return comparacion
    }catch(error){
        console.log(error);
    }
}

const Perfil = model("Perfiles", perfilSchema);

export default Perfil;
