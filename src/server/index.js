// carga variables de entorno del archivo .env
require("dotenv").config();

const path = require("path");

const express = require("express");
const cors = require("cors");
const app = express();

//coneccion con la base de datos
const db = require("./db");
//ruta para las citas
const citas = require("./citas");
console.log(path.resolve("dist/public"));

app.use(express.static(path.resolve("dist/public")));

// Settings
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 5000);

app.get("/", (req, res) => {
  res.send("Servidor Home");
});

//todas las peticiones hacia la ruta '/citas' son resueltas por el modulo ./citas.js
app.use("/citas", citas);

app.listen(app.get("port"), () => {
  console.log("Server running on port 5000");
});
