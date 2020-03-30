const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

/**
 * Configuracion para formatear forma segura una consulta 
 * @example connection.query("UPDATE posts SET title = :title", { title: "Hello MySQL" }); 
 */
connection.config.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
  };

//se connecta con la base de datos
connection.connect(function(err) {
  console.log("coneccion con la base de datos establecida correctamente");

  if (err) throw err;
});
module.exports = connection;
