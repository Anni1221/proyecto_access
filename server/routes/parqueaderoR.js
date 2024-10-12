const express = require('express');
const router = express.Router();
const parqueaderoController = require('../controllers/parqueaderoC');

// Obtener todos los parqueaderos
router.get('/', parqueaderoController.getAllParqueaderos);

// Obtener parqueadero por ID
router.get('/:parqueaderoId', parqueaderoController.getParqueaderoById);

// Crear nuevo parqueadero
router.post('/', parqueaderoController.createParqueadero);

module.exports = router;
