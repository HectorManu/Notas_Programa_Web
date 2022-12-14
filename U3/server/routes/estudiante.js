//  ESTE ES PARA CREAR NUESTRAS RUTAS DE MANERA MÁS EFICIENTE 

const express = require('express');
const router = express.Router();
const estudianteService = require('../services/estudianteService');

// GET estudiantes
router.get('/', async function(req, res, next){
    try{
        res.json(await estudianteService.getMultiple(req.query.page));
    }catch(err){
        console.error(`Error consultando estudiantes`, err.message);
        next(err);
    }
});

module.exports = router;
