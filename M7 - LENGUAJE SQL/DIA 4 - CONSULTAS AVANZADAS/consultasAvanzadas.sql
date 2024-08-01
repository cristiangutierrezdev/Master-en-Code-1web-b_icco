--Se crea la consulta relacional entre las 3 tablas de
--alumnos, materias, materia_alumnos
SELECT
	al.alumno_id, alumno_nombre,
	alumno_nombre || ' estudia ' || materia_nombre 
	|| ' los dias ' || mal_horario AS decripcion
FROM alumnos AS al
INNER JOIN materia_alumnos AS mal
ON al.alumno_id = mal.alumno_id
JOIN materias AS ma
ON mal.materia_id = ma.materia_id;

--Se crea la consulta relacional entre las 3 tablas de
--alumnos, materias, materia_alumnos pero con filtrado por nombre
SELECT 
	materia_nombre,
	alumno_nombre
FROM materias AS mat
JOIN materia_alumnos AS mal
ON mat.materia_id = mal.materia_id
JOIN alumnos AS al
ON mal.alumno_id = al.alumno_id
WHERE materia_nombre = 'Microbiología'

--Se crea la consulta relacional entre las 3 tablas de
--alumnos, materias, materia_alumnos pero con filtrado por nombre y filas agrupadas
SELECT 
	alumno_nombre,
	COUNT(materia_nombre)
FROM materias AS mat
JOIN materia_alumnos AS mal
ON mat.materia_id = mal.materia_id
JOIN alumnos AS al
ON mal.alumno_id = al.alumno_id
GROUP BY alumno_nombre
HAVING alumno_nombre ='Javier'

