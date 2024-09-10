import { connect } from "mongoose";

export const connection = (async () => {
  try {
    await connect(
      "mongodb+srv://admin:contrasena@cluster0.rv5lj.mongodb.net/album"
    );
    console.log("Db connected");
  } catch (err) {
    console.log(err);
  }
})();
