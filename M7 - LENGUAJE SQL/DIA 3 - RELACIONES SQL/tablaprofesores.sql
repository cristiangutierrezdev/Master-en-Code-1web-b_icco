CREATE TABLE PROFESORES (
	PROFESOR_ID SERIAL PRIMARY KEY,
	PROFESOR_NOMBRE VARCHAR(55) NOT NULL,
	PROFESOR_APELLIDO VARCHAR(55) NOT NULL,
	PROFESOR_TELEFONO INT NOT NULL,
	PROFESOR_EMAIL TEXT UNIQUE NOT NULL
);

INSERT INTO profesores( profesor_nombre,profesor_apellido, profesor_telefono, profesor_email,profesor_titulo)
	VALUES
('Alberto', 'Martínez', 252428 , 'alberto.martinez@example.com','Dr.'),
('Beatriz', 'González', 202126,'beatriz.gonzalez@example.com','Lic.'),
('Carlos', 'Ramírez',242827, 'carlos.ramirez@example.com','Ing.'),
('Diana', 'López', 212629, 'diana.lopez@example.com','Dra.'),
('Elena', 'Torres',232427, 'elena.torres@example.com','Mtra.'),
('Francisco', 'Pérez',232528, 'francisco.perez@example.com','Lic.');

ALTER TABLE profesores
	ADD COLUMN profesor_titulo VARCHAR(20) DEFAULT('Lic.')

SELECT
	profesor_id,
	profesor_titulo,
	profesor_nombre,
	profesor_apellido,
	profesor_email
FROM
	PROFESORES
WHERE PROFESOR_ID = 8;

UPDATE profesores SET profesor_email = 'francisco.perez1@example.com'
	WHERE profesor_id = 8 