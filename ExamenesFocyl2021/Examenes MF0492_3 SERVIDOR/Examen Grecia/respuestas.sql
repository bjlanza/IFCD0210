--1 registro

CREATE TABLE `alumno` (
	`idalumno` INT(11) NOT NULL,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`apellidos` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`fechaNac` DATE NULL DEFAULT NULL,
	`email` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	`trabaja` TINYINT(4) NULL DEFAULT NULL,
	PRIMARY KEY (`idalumno`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB

--2 registro

CREATE TABLE `curso` (
	`idclase` INT(11) NOT NULL,
	`idalumno` INT(11) NULL DEFAULT NULL,
	`idasignatura` INT(11) NULL DEFAULT NULL,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci',
	PRIMARY KEY (`idclase`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB

--3 registro

CREATE TABLE `asignatura` (
	`idasignatura` INT(11) NULL DEFAULT NULL,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8_general_ci'
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;