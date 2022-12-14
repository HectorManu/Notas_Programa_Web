function getOffset(currentPage=1, listPerPage){//esto es para la paginación 
    return (currentPage - 1) * [listPerPage];//hacemos el calculo de desplazamiento 
}

function emptyOrRows(rows){
    if(!rows){//si no hay reenglones entonces es un arreglo vacio
        return [];
    }
    return rows;
}

module.exports = {//rdyr modulo va a exportar dos funciones 
    getOffset,
    emptyOrRows
}
