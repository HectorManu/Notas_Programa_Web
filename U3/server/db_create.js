var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err){
    if(err) throw err;
    console.log("conectado...");
    //crear una base de datos
    con.query("CREATE DATABASE IF NOT EXISTS borrame", function(err, result){
        if(err) throw err;
        console.log("Base de datos creada");
    });
});