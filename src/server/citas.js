var express = require("express");
var router = express.Router();
//coneccion con la base de datos
const db = require("./db");
//queries para las citas
var QUERIES = require("./citas.queries");

//obtener todas las citas
router.get("/", (req, res) => {
  db.query(QUERIES.SELECT_ALL_CITAS, (err, resul) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: resul
      });
    }
  });
});
//crear una nueva cita
router.post("/", (req, res) => {
  const data = req.body;
  db.query(QUERIES.INSERT_CITAS, data, (err, resul) => {
    if (err) {
      return err;
    } else {
      return res.send("Cita agregada correctamente!");
    }
  });
});

module.exports = router;
