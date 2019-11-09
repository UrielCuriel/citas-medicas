-- to create a new database
CREATE DATABASE citas_odontologicas;

-- to use database
use citas_odontologicas;

-- creating a new table
CREATE TABLE citas (
  nombre TEXT,
  identificacion VARCHAR(11),
  telefono VARCHAR(10),
  direccion TEXT,
  fecha DATE(),
  horario VARCHAR(8)
);

-- to show all tables
show tables;

-- to describe table
describe citas;
