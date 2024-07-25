CREATE TABLE productos(
	producto_id SERIAL PRIMARY KEY,
	producto_nombre VARCHAR(50) NOT NULL,
	producto_precio NUMERIC(8,2) DEFAULT 0 CHECK(producto_precio >= 0),
	producto_cantidad SMALLINT DEFAULT 0 CHECK(producto_precio >= 0),
	producto_categoria TEXT DEFAULT('VARIOS')
);

INSERT INTO productos (producto_nombre, producto_precio, producto_cantidad, producto_categoria)
	VALUES
	('Pan de Molde', 1.50, 100, 'Alimentos'),
	('Leche Entera 1L', 0.90, 80, 'Lácteos'),
	('Queso Cheddar 200g', 2.50, 60, 'Lácteos'),
	('Yogur Natural 500g', 1.20, 70, 'Lácteos'),
	('Huevos Docena', 1.80, 50, 'Alimentos'),
	('Pollo Entero', 5.00, 30, 'Carnes'),
	('Carne Molida 1kg', 6.00, 40, 'Carnes'),
	('Salchichas Paquete', 3.00, 45, 'Carnes'),
	('Manzanas 1kg', 2.20, 55, 'Frutas y Verduras'),
	('Plátanos 1kg', 1.80, 60, 'Frutas y Verduras'),
	('Tomates 1kg', 1.50, 65, 'Frutas y Verduras'),
	('Zanahorias 1kg', 1.20, 70, 'Frutas y Verduras'),
	('Papas 1kg', 1.00, 75, 'Frutas y Verduras'),
	('Arroz 1kg', 1.00, 90, 'Granos y Cereales'),
	('Frijoles 1kg', 1.20, 85, 'Granos y Cereales'),
	('Aceite de Girasol 1L', 2.50, 50, 'Despensa'),
	('Azúcar 1kg', 1.50, 80, 'Despensa'),
	('Sal 1kg', 0.80, 100, 'Despensa'),
	('Jugo de Naranja 1L', 1.50, 70, 'Bebidas'),
	('Refresco de Cola 2L', 2.00, 60, 'Bebidas');

--Consultamos la tabla productos y mostramos las columnas producto_nombre producto_cantidad
--y las organizamos de manera descendiente alfabeticamente basados en la columna producto_nombre
SELECT 
	producto_nombre AS NOMBRE,
	producto_cantidad AS CANTIDAD
	FROM productos 
	ORDER BY producto_nombre DESC;

--Concatenamos 2 columnas y "creamos" de manera de consulta una nueva columna con esos valores unidos
SELECT 
	'hay '|| producto_cantidad ||' de ' ||producto_nombre || ' que vale' || producto_precio AS resultado,
	producto_cantidad * producto_precio as total
	FROM productos
	ORDER BY producto_nombre DESC;



