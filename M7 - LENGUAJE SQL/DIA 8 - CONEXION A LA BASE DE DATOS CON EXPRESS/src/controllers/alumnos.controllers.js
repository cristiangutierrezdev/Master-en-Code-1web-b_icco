import { conexion } from "../db.js";

const messagge = { messagge: "user not found" };

export const obtenerAlumnos = async (request, response) => {
  try {
    const resultado = await conexion.query(
      "SELECT * FROM alumnos ORDER BY alumno_id"
    );
    console.log(resultado.rows);
    response.json(resultado.rows);
  } catch (error) {
    console.log(error);
  }
};

export const crearAlumno = async (req, res) => {
  try {
    const data = req.body;
    const resultado = await conexion.query(
      `INSERT INTO alumnos(alumno_nombre, alumno_apellido,alumno_edad,alumno_correo,alumno_genero,carrera_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
      [
        data.nombre,
        data.apellido,
        data.edad,
        data.correo,
        data.genero,
        data.carrera_id,
      ]
    );
    if (resultado.rowCount === 1) {
      res.status(200).sendStatus(200);
    }
  } catch (error) {
    if (error?.code === "23505") {
      res.status(500).json(error.detail);
    }
  }
};

export const obtenerAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await conexion.query(
      "SELECT * FROM alumnos WHERE alumno_id = $1",
      [id]
    );

    if (resultado.rowCount === 0) {
      res.status(404).json(messagge);
    } else {
      res.status(200).json(resultado.rows[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const actualizarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad, correo, genero, carrera_id } = req.body;

    const resultado = await conexion.query(
      `UPDATE alumnos SET
        alumno_nombre =COALESCE($1,alumno_nombre),
        alumno_apellido =COALESCE($2,alumno_apellido),
        alumno_edad = COALESCE($3,alumno_edad),
        alumno_correo = COALESCE($4,alumno_correo),
        alumno_genero = COALESCE($5,alumno_genero),
        carrera_id = COALESCE($6,carrera_id)
        WHERE alumno_id = $7 
        RETURNING *`,
      [nombre, apellido, edad, correo, genero, carrera_id, id]
    );
    if (resultado.rowCount != 0) {
      res.status(200).json({ messagge: "usuario actualizado" });
    }
  } catch (error) {
    res.status(500).json(error.detail);
  }
};

export const eliminarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await conexion.query(
      `DELETE FROM alumnos WHERE alumno_id = ${id} RETURNING *`
    );
    if (resultado.rowCount != 0) {
      res.status(202).json({ messagge: "usuario eliminado" });
    } else {
      res.status(404).json(messagge);
    }
  } catch (error) {
    console.log(error);
  }
};
