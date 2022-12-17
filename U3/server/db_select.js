var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "borrame"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("conectado...");
    //0, 1 o muchos registros con todas sus columnas
    var sql = "SELECT * FROM estudiantes WHERE id=\'E18080001\'";
    con.query(sql, function (err, result, fields) {
        if (err) {
            //Manejando el error
            console.log("error:" + err.code);
            console.log("mysql dice:" + err.sqlMessage);
            console.log("sql:" + err.sql);

        } else {
            //Todo esta bien
            console.log(result);
            //console.log(fields);
        }

    });
});