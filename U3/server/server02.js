var express = require('express');
var app = express();
var fs = require("fs");

const env=process.env;
require('dotenv').config();

//Habilidta a express para procesar peticiones con json

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Rutas
//GET /listEstudiantes Devuelve una lista de estudiantes
app.get('/listEstudiantes', function(req, res){
    // Simular un SELECT * FROM estudiantes; 0, 1, o muchos registros
    fs.readFile(__dirname + "/" + "estudiantes.json", "utf8", function(err, data){
        console.log( data ); 
        res.end( data );
    });     
})

//GET /:id obtener UN estudiante por id
app.get('/:id', (req, res)=>{
    // Simular un SELECT * FROM estudiantes WHERE estudiante.id=id; 0, 1 registros
    fs.readFile(__dirname + "/" + "estudiantes.json", "utf8", function(err, data){
        //Convertir el texto a un JSON
        var estudiantes = JSON.parse( data );
        var unEstudiante = estudiantes["estudiante"+ req.params.id];
        console.log( unEstudiante ); 
        res.end( JSON.stringify(unEstudiante) );
    });     
})

//POST /addEstudiante
app.post('/addEstudiante', (req,res)=>{
    console.log('/addEstudiante');
    console.log(req.body);  // express.json() lo convierte a JSON
    var unEstudiante = req.body;  //JSON que viene del cliente para insertar en BD
    fs.readFile(__dirname + "/" + "estudiantes.json", "utf8", function(err, data){
        //Convertir el texto a un JSON
        var estudiantes = JSON.parse( data );
        estudiantes["estudiante5"] = unEstudiante; //lo guardamos en el arreglo JSON
        res.end( JSON.stringify( estudiantes ) );
    });
})

//DELETE /deleteEstudiante
app.delete('/deleteEstudiante/:id', (req, res)=>{
    // Simular un SELECT * FROM estudiantes WHERE estudiante.id=id; 0, 1 registros
    fs.readFile(__dirname + "/" + "estudiantes.json", "utf8", function(err, data){
        //Convertir el texto a un JSON
        var estudiantes = JSON.parse( data );
        delete estudiantes["estudiante"+ req.params.id];
        console.log( estudiantes ); 
        res.end( JSON.stringify(estudiantes) );
    });     
})


var server = app.listen(env.PORT||8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Servidor en http://%s:%s",host,port)
    console.log("DB_USER=%s",env.DB_USER||'root');
    console.log("DB_PASSWORD=%s",env.DB_PASSWORD||'secreto');
})