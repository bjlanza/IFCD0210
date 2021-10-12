-- Consulta 1
SELECT * FROM camara

-- consulta 2
SELECT nombre, marca, pvp AS precio FROM articulo

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
where nombre not in ('valladolid', 'burgos', 'madrid', 'cuenca');

-- consulta 6
select codp from provincia
where nombre like 'León%';

-- consulta 7
select numpedido,usuario,apellidos,nombre
from pedido join usuario on (usuario=email)
order by apellidos,nombre;

-- consulta 8

select dni,nombre,apellidos,email
from usuario U, pedido P
where U.email=P.Usuario
group by dni,nombre,apellidos,email
having count(*)>1;