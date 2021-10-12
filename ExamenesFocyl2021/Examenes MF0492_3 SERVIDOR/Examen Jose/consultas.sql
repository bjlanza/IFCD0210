-- Consulta 1
SELECT * FROM `camara`;

-- Consulta 2
SELECT nombre AS precio, marca AS precio, pvp AS precio FROM articulo;

-- Consulta 3
SELECT email, nombre, apellidos
FROM usuario 
ORDER BY apellidos DESC, nombre ASC;

-- Consulta 4
SELECT distinct pantalla from tv WHERE pantalla >= 21;

-- Consulta 5
SELECT codp, nombre FROM provincia WHERE nombre NOT IN ('Valladolid', 'Burgos', 'Madrid', 'Cuenca');

-- Consulta 6
SELECT codp FROM provincia WHERE nombre = "Leon";