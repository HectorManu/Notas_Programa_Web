var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err){
    if(err) throw err;
    console.log("conectado...");
    //crear una tabla en borrame
    var sql = "CREATE TABLE IF NOT EXISTS `borrame`.`estudiantes` ( `id` VARCHAR(10) NOT NULL , `nombre` VARCHAR(100) NOT NULL , `carrera` VARCHAR(3) NOT NULL , `semestre` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Tabla creada");
    });
});