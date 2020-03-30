// query para obtener todas las citas programadas
const SELECT_ALL_CITAS =
  "SELECT * FROM citas WHERE DATE_FORMAT(fecha, '%Y-%m-%e') <= fecha";

//query para insertar una nueva cita
const INSERT_CITAS = `INSERT INTO citas (nombre,identificacion,telefono,direccion,fecha, horario) VALUES(:nombre, :identificacion, :telefono, :direccion, :fecha, :horario);`;

module.exports = { SELECT_ALL_CITAS, INSERT_CITAS };
