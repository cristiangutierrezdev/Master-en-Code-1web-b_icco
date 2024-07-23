
CREATE TABLE carreras(
	carrera_id SERIAL PRIMARY KEY,
	carrera_nombre text NOT NULL,
	carrera_duracion INTERVAL
);

INSERT INTO carreras(carrera_nombre,carrera_duracion )
	VALUES
	('Programacion web', '4 years');
	

SELECT * from carreras;