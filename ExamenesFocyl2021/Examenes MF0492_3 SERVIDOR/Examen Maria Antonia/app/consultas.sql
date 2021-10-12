-- Consulta 1
select * from camara;

-- Consulta 2
SELECT nombre, marca, pvp AS pvp FROM articulo

-- Consulta 3
select email,nombre,apellidos 
from usuario 
order by apellidos,nombre desc;


-- Consulta 4
select distinct panel
from tv
where pantalla <= 21;

-- Consulta 5
select codp,nombre from provincia 
where nombre not IN ('47', '09', '28', '16');

-- Consulta 6
select codp from provincia 
where nombre like 'León%';

-- Consulta 7
select numpedido,usuario,apellidos,u.nombre,l.pueblo 
from pedido 
join usuario u on (usuario=email) 
join localidad l on (l.codm=u.pueblo and l.provincia=u.provincia)
order by apellidos,u.nombre;

-- Consulta 8--
select dni,nombre,apellidos,email 
from usuario U, pedido P
where U.email=P.Usuario 
group by dni,nombre,apellidos,email 
having count(*)>1;



