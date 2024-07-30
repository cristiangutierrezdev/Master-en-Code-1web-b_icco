CREATE TABLE materias(
	materia_id SERIAL PRIMARY KEY,
	materia_nombre VARCHAR(55) NOT NULL,
	materia_creditos INT DEFAULT 1
);

SELECT
	*
FROM
	materias;