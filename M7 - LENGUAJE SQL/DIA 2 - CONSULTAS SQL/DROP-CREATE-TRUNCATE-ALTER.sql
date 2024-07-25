-- crear comentarios con dos guines " -- " 

-- CREATE podemos crear bases de datos, tablas, tipo de dato, secuencias, indices, funciones, roles... 

--Creamos nuestra propia secuencia incremental en 1
CREATE SEQUENCE secuencia START WITH 100 INCREMENT BY 1;

CREATE DATABASE minimarket;

--Creamos nuestra tabla
CREATE TABLE alumnos(
	alumon_id SMALLINT PRIMARY KEY DEFAULT NEXTVAL('secuencia'),
	);

--Con ALTER podemos modificar las tablas, agregando, elimnando y renombrando columnas

--Modificiamos la tabla alumnos agreándole la columna alumno_nombre

ALTER TABLE alumnos ADD alumno_nombre TEXT NOT NULL;
ALTER TABLE alumnos DROP COLUMN alumno_notas;
ALTER TABLE alumnos ALTER COLUMN alumno_nombre SET DATA TYPE TEXT;
ALTER TABLE alumnos RENAME COLUMN id TO alumno_id;

--INSERT INTO nos permite agregar nuevos registros en nuestras tablas

INSERT INTO alumnos(alumno_nombre) VALUES('John Doe'),('John Doe'),('John Doe'),('John Doe'),('John Doe');

--TRUNCATE eliminamos todos los registros de una tabla pero no la tabla como tal

TRUNCATE TABLE alumnos 

--DROP podemos eliminar bases de datos, tablas, tipo de dato, secuencias, indices, funciones, roles... 
DROP TABLE alumnos;

--SELECT Mostramos los elementos de una tabla 

SELECT * FROM alumnos;

--OPERADORES LOGICOS 
-- < > = != AND OR
