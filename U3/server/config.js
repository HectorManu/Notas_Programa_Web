// ESTE ARCHIVO SE TIENE QUE CREAR ANTES DE SERVICES 

const env=process.env;// CREAMOS LA VARIABLE
require('dotenv').config();//UTILIZAMOS EL ENV PARA EL LA FUNCIÓN OBJETO 

const config={
    db:{
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || '',
        database: env.DB_DATABASE || 'escolar' 
    },
    listPerPage: env.LIST_PER_PAGE || 10//aquí hace una consulta hasta 10 interesante
};

module.exports = config;// DE NO HACER ESTO NO SE HARA UNA CONSULTA Y EES EL EROR QUE TENÍA EL PROFE 
