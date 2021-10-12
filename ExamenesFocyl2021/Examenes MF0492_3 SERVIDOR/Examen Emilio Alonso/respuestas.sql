CREATE TABLE `alumno` (
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`idalumno` INT(11) NOT NULL DEFAULT '0',
	`apellidos` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`fechaNac` DATE NULL DEFAULT NULL,
	`email` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`trabaja` TINYINT(4) NULL DEFAULT NULL,
	PRIMARY KEY (`idalumno`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

-----------
CREATE TABLE `asignatura` (
	`idasignatura` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`idasignatura`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=4
;
----------------

CREATE TABLE `curso` (
	`idclase` INT(11) NOT NULL,
	`idalumno` INT(11) NOT NULL,
	`idasignatura` INT(11) NOT NULL,
	`nombre` VARCHAR(45) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`idclase`) USING BTREE,
	INDEX `idasignatura` (`idasignatura`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;
----------
