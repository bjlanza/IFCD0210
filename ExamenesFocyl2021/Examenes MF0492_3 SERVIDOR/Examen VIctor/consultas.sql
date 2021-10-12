-- Consulta 1
SELECT * FROM CAMARA;

-- Consulta 2
SELECT nombre,marca,precio FROM articulo;

-- Consulta 3
SELECT email,nombre,apellidos FROM usuario ORDER BY apellidos,nombre DESC;

-- Consulta 4
SELECT DISTINCT panel FROM tv WHERE pantalla <= 21;

-- Consulta 5
SELECT codp,nombre FROM provincia WHERE nombre NOT IN ('valladolid', 'burgos', 'madrid', 'cuenca');

-- Consulta 6

-- Consulta 7

-- Consulta 8