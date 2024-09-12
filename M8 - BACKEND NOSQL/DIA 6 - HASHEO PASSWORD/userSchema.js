import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 16,
      minlength: 8,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        try{
            const passwordEncryp = await bcrypt.hash(this.password, 8)

            this.password = passwordEncryp
            next()

        }catch(err){
            console.log(err);
        }

    }else{
        next()
    }
})



export const User = model("user", userSchema);
