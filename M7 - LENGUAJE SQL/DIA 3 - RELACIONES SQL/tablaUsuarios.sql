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
	alumno_genero GENERO DEFAULT('Otro'),
--	carrera_id INT REFERENCES carreras(carrera_id)
--	carrera_id INT,
--	FOREIGN KEY (carrera_id) REFERENCES carreras(carrera_id)
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
SELECT * FROM alumnos ORDER BY alumno_id;

--Modificamos la tabla para agregarle nuevas columnas
ALTER TABLE alumnos
	ADD COLUMN alumno_apellido VARCHAR(55);

ALTER TABLE alumnos
	ADD COLUMN alumno_correo TEXT UNIQUE;

--Agregamos la llave foránea a nuestra tabla alumnos que apunta a la tabla carreras

ALTER TABLE alumnos 
	ADD COLUMN carrera_id INT REFERENCES carreras(carrera_id);

--Rellenamos la columna Carrera_id

UPDATE alumnos
	SET carrera_id = 7
	WHERE alumno_id = 1 OR alumno_id = 11 OR alumno_id = 20;

UPDATE alumnos
	SET carrera_id = 3
	WHERE alumno_id = 2 OR alumno_id = 12 OR alumno_id = 19;

UPDATE alumnos
	SET carrera_id = 4
	WHERE alumno_id = 3 OR alumno_id = 9 OR alumno_id = 18
	OR alumno_id = 15;

UPDATE alumnos
	SET carrera_id = 5
	WHERE alumno_id = 7 OR alumno_id =6 OR alumno_id = 13;

UPDATE alumnos
	SET carrera_id = 6
	WHERE alumno_id = 16 OR alumno_id = 17 OR alumno_id = 14;