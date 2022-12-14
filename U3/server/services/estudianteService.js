// AQUÍ HACEMOS LAS OPERACIONES QUE SE HARAN CON LA BASE DE DATOS DE ESTUDIANTES 

const db=require('./dbService');//PRIMERO REQUERIMOS EL SERVICIO PARA LA CONEXIÓN O LAS OPERACIONES DE BASE DE DATOS
const helper=require('../helper');//PEDIMOS EL HELPER PARA ELLO SI TENEMOS QUE HACERLO EN LA GERARQUIA DE SERVER 
const config=require('../config');//HACEMOS LOS DOS PUNTOS COMO EN EL DEARRIBA PORQUE SE ENCUENTRA EN ESA RUTA 

//listEstudiantes
async function getMultiple(page=1){//LLAMAMOS A MULTIPLE 
    const offset = helper.getOffset(page, config.listPerPage);//CALCULAMOS EL DESPLAZAMIENTO EL OBJETO DE CONFIG
    const rows = await db.query(
        // `INSERT INTO estudiantes
        // (id,nombre,carrera,semestre)
        // VALUES
        // (?,?,?,?)`
        `SELECT id, nombre, carrera, semestre
        FROM estudiantes LIMIT ?,?`,
        [offset, config.listPerPage ]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

//Agregar CRUD create, read, update, delete
module.exports = {
    getMultiple
}