SELECT 
	DISTINCT producto_categoria as categoria
	FROM productos;

SELECT producto_nombre FROM productos;

SELECT 
	producto_nombre
FROM productos
WHERE producto_nombre = 'Manzanas 1kg';

SELECT
	producto_id,
	producto_nombre,
	producto_precio,
	producto_cantidad,
	producto_cantidad * producto_precio as total
FROM productos
WHERE producto_nombre LIKE'A%'

SELECT * FROM productos;

SELECT
	producto_id,
	producto_nombre,
	producto_precio,
	producto_cantidad,
	producto_cantidad * producto_precio as total
FROM productos
WHERE producto_id BETWEEN 7 AND 17;

SELECT
	producto_id,
	producto_nombre,
	producto_precio,
	producto_cantidad,
	producto_cantidad * producto_precio as total
FROM productos
WHERE producto_nombre IN('A')


