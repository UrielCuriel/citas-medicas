const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.static(__dirname + '/public'));

const SELECT_ALL_CITAS = "SELECT * FROM citas WHERE DATE_FORMAT(fecha, '%Y-%m-%e') <= fecha";

const connection = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': 'contraseña',
    'database': 'citas_odontologicas'
});

// Settings
app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 5000);

app.get("/", (req, res)=>{
    res.send("Servidor Home")
})

app.get("/citas", (req, res)=>{
    connection.query(SELECT_ALL_CITAS, (err, resul) =>{
        if(err){
            return res.send(err)
        }else{
            
            return res.json({
                data: resul
            })
        }        
    })
})

app.post("/citas", (req, res)=>{

    const data = req.body;
    const INSERT_CITAS = `INSERT INTO citas (nombre,identificacion,telefono,direccion,fecha, horario) VALUES('${data.nombre}', '${data.identificacion}', '${data.telefono}', '${data.direccion}', '${data.fecha}', '${data.horario}');`

    connection.query(INSERT_CITAS, (err, resul)=>{
        if(err){
            return err
        }else{
            return res.send('Cita agregada correctamente!');
        }
    })
})

app.listen(app.get('port'), () => {
    console.log('Server running on port 5000');
})

