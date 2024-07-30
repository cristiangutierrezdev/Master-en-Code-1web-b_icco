--Con GROUP BY agrupamos varias columnas que se repiten en sus datos
--Para realizar filtrados cuando usamos GROUP BY no podemos usar WHERE, para ese caso se usa HAVING
SELECT 
	producto_categoria,
	COUNT(producto_nombre) as "cantidad de productos"
FROM productos
GROUP BY producto_categoria
ORDER BY "cantidad de productos" DESC;

SELECT 
	producto_categoria,
	SUM(producto_cantidad) as cantidad
FROM productos
GROUP BY producto_categoria
ORDER BY cantidad DESC;

SELECT 
	producto_categoria,
	SUM(producto_cantidad) as cantidad
FROM productos
GROUP BY producto_categoria
HAVING producto_categoria = 'Frutas y Verduras'

SELECT * FROM productos;