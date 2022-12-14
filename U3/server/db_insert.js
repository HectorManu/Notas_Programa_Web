var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "borrame"
});

con.connect(function(err){
    if(err) throw err;
    console.log("conectado...");
    //crear una tabla en borrame
    var sql = "INSERT INTO `estudiantes` (`id`, `nombre`, `carrera`, `semestre`) VALUES ('E18080002', 'Miguel Davalos', 'ISC', '7')";
    con.query(sql, function(err, result){
        if(err) {
            //Manejando el error
            console.log("error:"+err.code);
            console.log("mysql dice:"+err.sqlMessage);
            console.log("sql:"+err.sql);
            
        }else{
           //Todo esta bien
           console.log("Registro insertado");
        }
        
    });
});