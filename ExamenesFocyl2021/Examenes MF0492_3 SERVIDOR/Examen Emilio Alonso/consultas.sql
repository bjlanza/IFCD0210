-- Consulta 1

select * from camara;

-- Consulta 2

select nombre, marca, pvp AS precio from articulo;

-- Consulta 3

select email,nombre,apellidos from usuario
order by apellidos asc, nombre desc;

-- Consulta 4

select distinct panel from tv
where pantalla <= 21;

-- Consulta 5

select distinct codp, nombre
from provincia
where nombre <> 'Valladolid' or nombre <> 'Burgos' or nombre <> 'Madrid' or nombre <> 'Cuenca';

-- Consulta 6

select codp, nombre
from provincia
where nombre = 'leon' ;

-- Consulta 7

select numpedido,usuario,apellidos,nombre
from pedido join usuario on (usuario=email)
order by apellidos,nombre;

-- Consulta 8

select dni,nombre,apellidos,telefono
from usuario U, pedido P
where U.email=P.Usuario
group by dni,nombre,apellidos,email
having count(*)>1;
