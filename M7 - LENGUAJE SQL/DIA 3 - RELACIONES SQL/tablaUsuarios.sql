--Sentencias para eliminar tablas y tipos
DROP TABLE alumnos;
DROP TYPE genero;

--Sentencia para crear un tipo
CREATE TYPE genero AS ENUM('Masculino','Femenino','Otro');

--creamos de nuevo la tabla alumnos con nuevas columnas
CREATE TABLE alumnos(
	alumno_id SERIAL PRIMARY KEY,
	alumno_nombre VARCHAR(55) NOT NULL,
	alumno_apellido VARCHAR(55) NOT NULL,
	alumno_edad INT NOT NULL,
	alumno_correo TEXT UNIQUE NOT NULL,
	alumno_genero GENERO DEFAULT('Otro')
);

--Insertamos nuevos registros a la tabla alumnos
INSERT INTO alumnos(alumno_nombre, alumno_apellido, alumno_edad, alumno_correo, alumno_genero)
	VALUES
	('Juan', 'Pérez', 20, 'juan.perez@example.com', 'Masculino'),
('María', 'Gómez', 22, 'maria.gomez@example.com', 'Femenino'),
('Luis', 'Fernández', 21, 'luis.fernandez@example.com', 'Masculino'),
('Ana', 'López', 23, 'ana.lopez@example.com', 'Femenino'),
('Carlos', 'Martínez', 19, 'carlos.martinez@example.com', 'Masculino'),
('Laura', 'Rodríguez', 24, 'laura.rodriguez@example.com', 'Femenino'),
('Javier', 'Sánchez', 20, 'javier.sanchez@example.com', 'Masculino'),
('Elena', 'Castro', 22, 'elena.castro@example.com', 'Femenino'),
('Pablo', 'Morales', 21, 'pablo.morales@example.com', 'Masculino'),
('Marta', 'Díaz', 23, 'marta.diaz@example.com', 'Femenino'),
('Ricardo', 'Pérez', 20, 'ricardo.perez@example.com', 'Masculino'),
('Isabel', 'Martínez', 21, 'isabel.martinez@example.com', 'Femenino'),
('Andrés', 'García', 22, 'andres.garcia@example.com', 'Masculino'),
('Patricia', 'Fernández', 24, 'patricia.fernandez@example.com', 'Femenino'),
('Manuel', 'Rodríguez', 19, 'manuel.rodriguez@example.com', 'Masculino'),
('Gabriela', 'Romero', 20, 'gabriela.romero@example.com', 'Femenino'),
('Fernando', 'Ruiz', 22, 'fernando.ruiz@example.com', 'Masculino'),
('Silvia', 'Jiménez', 21, 'silvia.jimenez@example.com', 'Femenino'),
('Enrique', 'Morales', 20, 'enrique.morales@example.com', 'Masculino'),
('Paola', 'Vargas', 23, 'paola.vargas@example.com', 'Femenino');

--mostramos toda la info de la tabla alumnos
SELECT * FROM alumnos;

--Modificamos la tabla para agregarle nuevas columnas
ALTER TABLE alumnos
	ADD COLUMN alumno_apellido VARCHAR(55);

ALTER TABLE alumnos
	ADD COLUMN alumno_correo TEXT UNIQUE;