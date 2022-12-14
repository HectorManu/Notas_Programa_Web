

const { EEXIST } = require('constants');
var express = require('express');
var app = express();
var fs = require("fs");
const { restart } = require('nodemon');

const env=process.env;
require('dotenv').config();// PARA QUE ESTO FUNCION NOS PERMITE UN OBJETO DE ESTA FUNCION PARA PODER EJECUTAR EL .ENV

const estudianteRouter = require('./routes/estudiante');//REQUERIMOS LAS RUTAS 

//Habilita a express para procesar peticiones con json

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res)=>{//
    res.json({'mensaje':'ok'});
})

app.use('/estudiantes', estudianteRouter);

// Error en el middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);//PARA MANEJO DE RUTAS QUE NO EXISTEN
    res.status(statusCode).json({'mensaje:': err.message });
});

var server = app.listen(env.PORT||8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Servidor en http://%s:%s",host,port)   
    console.log("DB_user=$s",env.DB_USER||'root');
    console.log("DB_password=$s",env.DB_PASSWORD||'secreto');
})
