-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.8-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for cursoweb
DROP DATABASE IF EXISTS `cursoweb`;
CREATE DATABASE IF NOT EXISTS `cursoweb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cursoweb`;

-- Dumping structure for table cursoweb.alumno
DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `idalumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `trabaja` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idalumno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table cursoweb.asignatura
DROP TABLE IF EXISTS `asignatura`;
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idasignatura` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idasignatura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table cursoweb.curso
DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `idclase` int(11) NOT NULL AUTO_INCREMENT,
  `idalumno` int(11) NOT NULL,
  `idasignatura` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idclase`),
  KEY `FK_curso_alumno` (`idalumno`),
  KEY `FK_curso_asignatura` (`idasignatura`),
  CONSTRAINT `FK_curso_alumno` FOREIGN KEY (`idalumno`) REFERENCES `alumno` (`idalumno`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_curso_asignatura` FOREIGN KEY (`idasignatura`) REFERENCES `asignatura` (`idasignatura`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

--CONSULTAS

/CONSULTA 1 --SELECT * FROM camara 
/CONSULTA 2 --SELECT nombre, marca, pvp AS precio FROM articulo
/CONSULTA 3 --SELECT email,nombre,apellidos FROM usuario ORDER BY apellidos ASC, nombre DESC;
/CONSULTA 4 --SELECT DISTINCT panel FROM tv WHERE pantalla <=21
/CONSULTA 5 --SELECT codp, nombre FROM provincia WHERE nombre NOT IN ('Valladolid', 'Burgos', 'Madrid', 'Cuenca')
/CONSULTA 6 --SELECT codp FROM provincia WHERE nombre LIKE 'León%'
/CONSULTA 7 --SELECT numpedido,usuario,apellidos,nombre FROM pedido, usuario WHERE usuario=email ORDER BY 3,4
/CONSULTA 8 --SELECT MAX(dni), MAX(nombre), MAX(apellidos),email FROM usuario U, pedido P WHERE U.email=P.Usuario GROUP BY email HAVING COUNT(*)>1;





