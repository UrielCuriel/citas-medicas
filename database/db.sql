-- to create a new database
CREATE DATABASE citas_odontologicas;
-- to use database
use citas_odontologicas;
-- creating a new table
CREATE TABLE `citas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` TEXT,
  `identificacion` VARCHAR(11),
  `telefono` VARCHAR(10),
  `direccion` TEXT,
  `fecha` DATE,
  `horario` TIME,
  PRIMARY KEY (`id`)
) -- to show all tables
-- show tables;
-- to describe table
-- describe citas;