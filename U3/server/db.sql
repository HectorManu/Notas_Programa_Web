CREATE TABLE `escolar`.`estudiantes` ( `id` VARCHAR(10) NOT NULL , `nombre` VARCHAR(100) NOT NULL , `carrera` VARCHAR(3) NOT NULL , `semestre` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `estudiantes` (`id`, `nombre`, `carrera`, `semestre`) VALUES ('E18080001', 'Miguel Davalos', 'ISC', '7')

DELETE FROM `estudiantes` WHERE `estudiantes`.`id` = \'E18080002\'

UPDATE `estudiantes` SET `nombre` = 'Eloisa Cardenas', `semestre` = '9' WHERE `estudiantes`.`id` = 'E18080002'