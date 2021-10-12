SELECT * FROM `camara`

SELECT cod,nombre,marca,pvp AS precio
FROM `articulo`;
select email,nombre,apellidos from usuario ORDER BY `usuario`.`apellidos` DESC ,`usuario`.`nombre` ASC;
select distinct panel
from tv
where pantalla <= 21;
select codp,nombre from provincia
where nombre not in ('valladolid', 'burgos', 'madrid', 'cuenca');
select numpedido,usuario,apellidos,u.nombre,l.pueblo
from pedido
join usuario u on (usuario=email)
join localidad l on (l.codm=u.pueblo and l.provincia=u.provincia)
order by apellidos,u.nombre;
select max(dni),max(nombre),max(apellidos),email
from usuario U, pedido P
where U.email=P.Usuario
group by email
having count(*)>1;