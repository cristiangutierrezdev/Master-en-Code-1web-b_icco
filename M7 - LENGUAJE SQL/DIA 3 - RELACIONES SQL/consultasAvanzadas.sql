--Consultas relacionales

--Traemos los datos que se relacionan en algo especifico

--INNER JOIN ó JOIN

--Relacion entre las tablas alumnos y carreras
SELECT
	alumno_nombre AS "Nombre alumno",
	alumno_apellido,
	alumno_correo,
	carrera_nombre,
	carrera_duracion * 5
FROM alumnos AS al
INNER JOIN carreras AS ca
ON al.carrera_id = ca.carrera_id;

--Ordenar datos por carrera_duracion
SELECT
	alumno_nombre AS "Nombre alumno",
	alumno_apellido,
	alumno_correo,
	carrera_nombre,
	carrera_duracion
FROM alumnos AS al
INNER JOIN carreras AS ca
ON al.carrera_id = ca.carrera_id
ORDER BY carrera_duracion DESC;

--Filtrar datos por alumno
SELECT 
	alumno_nombre,
	alumno_apellido,
	carrera_nombre
FROM alumnos
JOIN carreras
ON alumnos.carrera_id = carreras.carrera_id
WHERE alumno_nombre LIKE'Lau%';

--Filtras los datos por carrera
	
SELECT 
	carrera_nombre,
	alumno_nombre
FROM alumnos
JOIN carreras
ON alumnos.carrera_id = carreras.carrera_id
WHERE carrera_nombre = 'Medicina';

--Agrupar las carreras y numero de estudiantes por carrera

SELECT
	carrera_nombre,
	COUNT(alumno_nombre) AS "cantidad de alumnos"
FROM alumnos as al
JOIN carreras as ca
ON al.carrera_id = ca.carrera_id
GROUP BY carrera_nombre
HAVING carrera_nombre = 'Medicina'
-- el ORDER BY en este caso en especifico no tiene lógica
ORDER BY "cantidad de alumnos" DESC;

--LEFT JOIN

SELECT
	*
FROM alumnos AS al
LEFT OUTER JOIN carreras AS ca
ON al.carrera_id = ca.carrera_id;

--RIGHT JOIN
SELECT
	*
FROM alumnos AS ca
RIGHT OUTER JOIN carreras AS al
ON al.carrera_id = ca.carrera_id;

--FULL JOIN

SELECT
	*
FROM alumnos AS al
FULL JOIN carreras AS ca
ON al.carrera_id = ca.carrera_id;

SELECT 
	*
FROM alumnos AS al
CROSS JOIN carreras AS ca























