CREATE TABLE ALUMNO_PROFESOR (
	ALPRO_ID SERIAL PRIMARY KEY,
	ALPRO_FECHA TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	ALUMNO_ID INT REFERENCES ALUMNOS (ALUMNO_ID),
	PROFESOR_ID INT REFERENCES PROFESORES (PROFESOR_ID)
);

INSERT INTO
	ALUMNO_PROFESOR (ALUMNO_ID, PROFESOR_ID)
VALUES
	(1, 3),
	(1, 6),
	(1, 8),
	(2, 4),
	(2, 6),
	(2, 5),
	(3, 3),
	(3, 4),
	(3, 7),
	(4, 6),
	(4, 5),
	(4, 8),
	(5, 8),
	(5, 6),
	(5, 4);

SELECT
	ALPRO_ID,
	ALUMNO_ID,
	PROFESOR_ID,
	ALPRO_FECHA
FROM
	ALUMNO_PROFESOR;

SELECT
	'El alumno ' || ALUMNO_NOMBRE || ' Ve clases con ' || PROFESOR_NOMBRE
	AS DESCRIPCION
FROM ALUMNOS AS AL
JOIN ALUMNO_PROFESOR AS ALPRO
ON AL.ALUMNO_ID = ALPRO.ALUMNO_ID
JOIN PROFESORES AS PRO
ON ALPRO.PROFESOR_ID = PRO.PROFESOR_ID;

SELECT
	'El alumno ' || ALUMNO_NOMBRE || ' Ve clases con ' ||
	COUNT(PROFESOR_NOMBRE) || ' Profesores'
	AS DESCRIPCION
FROM ALUMNOS AS AL
JOIN ALUMNO_PROFESOR AS ALPRO
ON AL.ALUMNO_ID = ALPRO.ALUMNO_ID
JOIN PROFESORES AS PRO
ON ALPRO.PROFESOR_ID = PRO.PROFESOR_ID
GROUP BY ALUMNO_NOMBRE
	
SELECT
	'El profesor ' || PROFESOR_NOMBRE || ' tiene ' ||
	COUNT(ALUMNO_NOMBRE) || ' alumnos a su cargo'
	AS DESCRIPCION
FROM ALUMNOS AS AL
JOIN ALUMNO_PROFESOR AS ALPRO
ON AL.ALUMNO_ID = ALPRO.ALUMNO_ID
JOIN PROFESORES AS PRO
ON ALPRO.PROFESOR_ID = PRO.PROFESOR_ID
GROUP BY PROFESOR_NOMBRE
HAVING PROFESOR_NOMBRE LIKE '%i%'














