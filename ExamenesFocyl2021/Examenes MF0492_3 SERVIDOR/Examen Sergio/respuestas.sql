--Tabla alumno

CREATE TABLE `alumno` (
	`idAlumno` INT(11) NOT NULL,
	`nombre` VARCHAR(45) NOT NULL DEFAULT '' COLLATE 'utf8_spanish_ci',
	`apellidos` VARCHAR(45) NOT NULL DEFAULT '' COLLATE 'utf8_spanish_ci',
	`fechaNac` DATE NOT NULL,
	`email` VARCHAR(45) NOT NULL DEFAULT '' COLLATE 'utf8_spanish_ci',
	`trabaja` TINYINT(4) NOT NULL DEFAULT '0',
	PRIMARY KEY (`idAlumno`) USING BTREE
)
COLLATE='utf8_spanish_ci'
ENGINE=InnoDB
;

--Tabla Curso

--CREACION TABLA ASIGNATURA

CREATE TABLE `asignatura` (
	`idasignatura` INT NOT NULL,
	`nombre` VARCHAR(45) NOT NULL DEFAULT ''
)
COLLATE='utf8_spanish_ci'
;
