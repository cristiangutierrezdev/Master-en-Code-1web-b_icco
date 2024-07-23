CREATE TYPE genero AS ENUM('masculino', 'femenino','otro');

CREATE TABLE alumnos(
	alumno_id SERIAL PRIMARY KEY,
	alumno_nombre VARCHAR(50) NOT NULL,
	alumno_genero genero DEFAULT('otro'),
	alumno_edad INT NOT NULL
);

INSERT INTO alumnos(alumno_nombre,alumno_edad, alumno_genero )
	VALUES
	('Patricio', 18, 'femenino'),
	('Camila',20 , 'femenino'),
	('Martina',19,  'femenino'),
	('Juan',17, 'femenino'),
	('Pablo', 18, 'femenino');

SELECT * from alumnos;