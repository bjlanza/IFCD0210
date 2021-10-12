-- consulta 1

SELECT * FROM camara

--consulta 2

SELECT nombre, marca, pvp AS precio
FROM articulo;

--consulta 3

SELECT email, nombre, apellidos FROM usuario
ORDER BY apellidos ASC, nombre DESC;

--consulta 4

select distinct panel
FROM tv
WHERE pantalla <= 21

--consulta 5

SELECT codp, nombre FROM provincia
WHERE nombre NOT IN ('valladolid', 'burgos', 'madrid', 'cuenca');

--consulta 6

SELECT codp FROM provincia
WHERE nombre='Leon';
