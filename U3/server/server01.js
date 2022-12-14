var express = require('express');
var app = express();
var fs = require("fs");

//Rutas
app.get('/', function(req, res){
    console.log("petición GET recibida");
    res.send("<h1> Método GET </h1>");
})

app.post('/', function(req, res){
    console.log("petición POST recibida");
    res.send("<h1> Método POST </h1>");
})

app.delete('/delUsuario', function(req, res){
    console.log("petición DELETE recibida");
    res.send("<h1> Método DELETE </h1>");
})

app.get('/listUsuarios', function(req, res){
    console.log("petición GET para /listUsuarios ");
    res.send("<h1> Método GET /listUsuarios </h1>");
})

//Acepta xy1z xyabcz xy1234z
app.get('/xy*z', function(req, res){
    console.log("petición GET para /xy*z ");
    res.send("<h1> Método GET /xy*z </h1>");
})


var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Servidor en http://%s:%s",host,port)
})


/*
 Cambiarlo por Express
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1> Hola Mundo nodemon!!! </h1>');
    console.log("Servidor en el puerto 8080");
}).listen(8080);

*/