import { connect } from "mongoose";

export async function conexion() {
  try {
    const result = await connect(
      "mongodb+srv://admin:Root1234@cluster0.rv5lj.mongodb.net/libros"
    );
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}
conexion()