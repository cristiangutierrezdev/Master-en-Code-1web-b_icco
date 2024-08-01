--Creamos la tabla intermedia que nos permite consultar los datos de alumnos y materias
CREATE TABLE materia_alumnos(
	mal_id SERIAL PRIMARY KEY,
	mal_horario TEXT NOT NULL,
	materia_id INT,
	alumno_id INT REFERENCES alumnos(alumno_id),
	FOREIGN KEY (materia_id) REFERENCES materias(materia_id)
);

--Se insertan registros en la tabla materia_alumnos
INSERT INTO 
	materia_alumnos(mal_horario, materia_id, alumno_id)
VALUES
	('Lunes',11 , 6),
	('Jueves',15 , 6),
	('Martes',12 , 7),
	('Viernes',14 , 7),
	('Martes',13 , 13),
	('Lunes',14 , 13);




SELECT * FROM materia_alumnos;
