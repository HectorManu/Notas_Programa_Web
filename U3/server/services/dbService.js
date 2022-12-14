const mysql = require("mysql2/promise");
const config = require('../config');//aquí subo a nivel de servidor 

async function query(sql, params){//aquí hago una funcion asincrona 
    const connection = await mysql.createConnection(config.db);//creamos la conexxión para que este pueda esperar a tener la conexión lista
    const [results, ] = await connection.execute(sql, params);// esperamos los resultados con un await como el de arriba 

    return results;
}

module.exports = {
    query
}
