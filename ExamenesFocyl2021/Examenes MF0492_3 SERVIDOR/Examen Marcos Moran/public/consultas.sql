--Consulta 1
SELECT * FROM tiendaonline.camara;
--Consulta 2
SELECT nombre, marca, pvp as precio FROM tiendaonline.articulo;
--Consulta 3
SELECT email, nombre, apellidos FROM tiendaonline.usuario ORDER BY apellidos asc, nombre desc;
--Consulta 4
SELECT distinct pantalla FROM tiendaonline.tv where pantalla <= 21 ;
--Consulta 5
SELECT * FROM tiendaonline.provincia where nombre not in ('Valladolid', 'Burgos', 'Madrid', 'Cuenca');
--Consulta 6
SELECT codp FROM tiendaonline.provincia where nombre = "León";
--Consulta 7
SELECT numPedido, apellidos, nombre, localidad.pueblo  FROM ((pedido INNER JOIN usuario ON pedido.usuario = usuario.email) INNER JOIN localidad ON usuario.pueblo = localidad.codm);
--Consulta 8
SELECT dni, nombre, apellidos, telefono FROM tiendaonline.pedido inner join usuario on pedido.usuario = usuario.email group by dni,nombre,apellidos,email
having count(*)>1;