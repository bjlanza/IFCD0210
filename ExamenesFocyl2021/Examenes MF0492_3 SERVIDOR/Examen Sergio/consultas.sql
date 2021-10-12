-- consulta 1

SELECT * FROM camara;

-- consulta 2

select nombre, marca, pvp AS precio
from articulo 

-- consulta 3

select email,nombre,apellidos 
from usuario 
order by apellidos,nombre desc;

-- consulta 4

select distinct panel
from tv
where pantalla <= 21;

-- consulta 5

select codp,nombre from provincia 
where nombre not in ('Valladolid', 'Burgosd', 'Madid', 'Cuenca');

-- consulta 6


-- consulta 7


-- consulta 8