-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.19-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cursoweb
CREATE DATABASE IF NOT EXISTS `cursoweb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cursoweb`;

-- Volcando estructura para tabla cursoweb.alumno
CREATE TABLE IF NOT EXISTS `alumno` (
  `idalumno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `trabaja` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idalumno`),
  KEY `nombre` (`nombre`),
  KEY `apellidos` (`apellidos`),
  KEY `fechaNac` (`fechaNac`),
  KEY `email` (`email`),
  KEY `trabaja` (`trabaja`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='tabla que contiene los alumnos';

-- Volcando datos para la tabla cursoweb.alumno: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` (`idalumno`, `nombre`, `apellidos`, `fechaNac`, `email`, `trabaja`) VALUES
	(1, 'Jose', 'Rodriguez Martinez', '1999-10-01', 'josero@gmail.com', 0),
	(2, 'David', 'Sanchez Mateos', '2000-07-15', 'davidsan@gmail.com', 1),
	(3, 'Lucia', 'Alvarez del Rincon', '1997-07-01', 'luciaalv@hotmail.com', 1);
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;

-- Volcando estructura para tabla cursoweb.asignatura
CREATE TABLE IF NOT EXISTS `asignatura` (
  `idasignatura` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idasignatura`),
  KEY `idasignatura` (`idasignatura`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla cursoweb.asignatura: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `asignatura` DISABLE KEYS */;
INSERT INTO `asignatura` (`idasignatura`, `nombre`) VALUES
	(1, 'Bases de Datos'),
	(2, 'Programacion '),
	(3, 'Metodologia SCRUM');
/*!40000 ALTER TABLE `asignatura` ENABLE KEYS */;

-- Volcando estructura para tabla cursoweb.curso
CREATE TABLE `curso` (
	`idclase` INT(11) NOT NULL AUTO_INCREMENT,
	`idalumno` INT(11) NULL DEFAULT NULL,
	`idasignatura` INT(11) NOT NULL,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`idclase`) USING BTREE,
	INDEX `idalumno` (`idalumno`) USING BTREE,
	INDEX `idasignatura` (`idasignatura`) USING BTREE,
	CONSTRAINT `FK_curso_alumno` FOREIGN KEY (`idalumno`) REFERENCES `cursoweb`.`alumno` (`idalumno`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `FK_curso_asignatura` FOREIGN KEY (`idasignatura`) REFERENCES `cursoweb`.`asignatura` (`idasignatura`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=4
;

-- Volcando datos para la tabla cursoweb.curso: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` (`idclase`, `idalumno`, `idasignatura`) VALUES
	(1, 2, 1),
	(2, 3, 3),
	(3, 1, 1);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

-- Busquedas